import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = parseInt(process.env.PORT || '3000', 10);
const app = express();

app.use(express.json({ limit: '10mb' }));

// In-memory leads storage
interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  propertyAddress?: string;
  serviceNeeded: string;
  roofType?: string;
  propertyType?: string;
  message?: string;
  createdAt: string;
}

const leads: Lead[] = [
  {
    id: 'demo-1',
    name: 'Sarah Jenkins',
    phone: '(941) 555-0192',
    email: 'sarah.j@example.com',
    propertyAddress: 'Palmer Ranch, Sarasota, FL',
    serviceNeeded: 'Roof Replacement',
    roofType: 'Tile Roofing',
    propertyType: 'Home',
    message: 'Looking for a replacement estimate on our 20-year-old concrete tile roof.',
    createdAt: new Date().toISOString(),
  }
];

// Lead submission endpoint
app.post('/api/leads', (req, res) => {
  try {
    const { name, phone, email, propertyAddress, serviceNeeded, roofType, propertyType, message } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone number are required.' });
    }

    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      name,
      phone,
      email: email || '',
      propertyAddress: propertyAddress || '',
      serviceNeeded: serviceNeeded || 'Not Specified',
      roofType: roofType || 'Not Sure',
      propertyType: propertyType || 'Home',
      message: message || '',
      createdAt: new Date().toISOString(),
    };

    leads.unshift(newLead);
    console.log(`[Lead Captured] ${newLead.name} - ${newLead.serviceNeeded} - ${newLead.phone}`);

    return res.json({
      success: true,
      message: 'Thank you! The 2nd Gen Roofing team has received your request and will contact you shortly.',
      lead: newLead,
    });
  } catch (error) {
    console.error('Error saving lead:', error);
    return res.status(500).json({ error: 'Internal server error saving lead request.' });
  }
});

// AI Chatbot Knowledge Base & System Instruction
const SYSTEM_INSTRUCTION = `You are the "2nd Gen Roofing Assistant", the official website assistant for 2nd Gen Roofing LLC.
Your job is to provide helpful, courteous, and accurate information grounded strictly in 2nd Gen Roofing's verified business details, and to guide visitors toward requesting a free estimate or calling the team.

COMPANY IDENTITY & VERIFIED DETAILS:
- Company Name: 2nd Gen Roofing LLC (commonly 2nd Gen Roofing)
- Positioning: "Sarasota & Bradenton's Roofing Professionals"
- Heritage: Family-owned and operated roofing company rooted in Florida's Gulf Coast.
- Legacy: Two generations of Florida roofers, with a third generation coming up. Led by father-and-son team Alejandro Amaya (Owner) and AJ Amaya.
- Decades of local roofing experience.
- Florida State License: CCC1333718 (Florida Department of Business & Professional Regulation).
- Phone: (941) 704-9081
- Email: info@2ndgenroofing.com
- Physical Locations:
  1) 2237 Industrial Blvd Unit A, Sarasota, FL 34234
  2) 407 52nd Avenue Plz W, Bradenton, FL 34207
- Primary Service Areas: Sarasota County & Manatee County.
- Specific Communities Served: Sarasota, Bradenton, North Port, Venice, Ruskin, St. Pete, Osprey, Palmetto, Parrish.
- Reputation & Badges:
  * Nextdoor "Neighborhood Fave" 3 Years in a Row
  * 5.0 Star Average on Google and Angi (98% customer recommendation rate)
  * BBB A+ Rating
  * Member of Florida Roofing and Sheet Metal Contractors Association (FRSA)
  * Financing available through Hearth (up to $250,000 with affordable monthly payment plans).

CORE SERVICES & ROOF SYSTEMS:
1. Roof Replacements (Reroofs):
   - Shingle Reroofs: GAF Timberline HDZ, Atlas Pinnacle Pristine, Tamko Heritage architectural shingles engineered for Florida wind and heat.
   - Tile Reroofs: Clay barrel tile, Spanish S-tile, concrete flat & profile tiles.
   - Metal Reroofs: Standing seam, 5V crimp, screw-down systems built for coastal salt air and extreme weather resistance.
   - Low Slope Replacements: Commercial & residential flat roofs using modified bitumen, TPO, and durable multi-ply membranes.
2. Roof Repairs:
   - Shingle repairs (blown-off shingles, ridge cap damage, pipe boot collar leaks).
   - Tile repairs (cracked/slipped tiles, valley flashing leaks, mortar repair).
   - Emergency leak repairs and storm damage restoration.
3. Inspections & Preventative Maintenance:
   - Thorough roof condition evaluations, buyer/seller inspections, storm readiness assessments.

STRICT SAFETY & ACCURACY RULES:
- NEVER diagnose structural damage through chat.
- NEVER give dangerous roof-climbing instructions or tell homeowners to climb onto roofs. Florida roofs can be steep, fragile, and hazardous.
- NEVER guarantee that a roof can be repaired without an in-person physical inspection by 2nd Gen Roofing.
- NEVER quote exact prices or guarantee pricing (explain that every roof is unique in square footage, pitch, layers, and decking condition, but 2nd Gen Roofing provides 100% free, honest written estimates).
- NEVER invent warranties, timelines, or insurance coverage guarantees.
- NEVER pretend to be a human employee; always identify as the 2nd Gen Roofing Assistant.
- If you do not know an answer or if a visitor asks about something not in your verified knowledge, reply:
  "I don't want to give you inaccurate information. I can help you contact 2nd Gen Roofing directly at (941) 704-9081 or request a free on-site estimate."
- Encourage visitors to take the next step: "Request a Free Estimate" or call "(941) 704-9081".
- Keep your tone warm, respectful, family-oriented, honest, and direct.`;

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, leadInfo } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // If API key is available, use official @google/genai SDK
    if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      // Prepare conversation history
      const formattedContents = messages.map((m: { role: string; content: string }) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }));

      // If lead context is present, inject as context
      let contextualInstruction = SYSTEM_INSTRUCTION;
      if (leadInfo) {
        contextualInstruction += `\n\nCURRENT VISITOR QUALIFICATION STATE:
Service Needed: ${leadInfo.serviceNeeded || 'Unknown'}
Property Type: ${leadInfo.propertyType || 'Unknown'}
Roof Type: ${leadInfo.roofType || 'Unknown'}
City: ${leadInfo.city || 'Unknown'}`;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: formattedContents,
        config: {
          systemInstruction: contextualInstruction,
          temperature: 0.6,
          topP: 0.9,
        },
      });

      const replyText = response.text || "I'd be glad to help connect you with our team at (941) 704-9081 or arrange your free estimate.";
      return res.json({ reply: replyText });
    }

    // High quality intelligent local fallback if API key is not configured yet
    const lastUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';

    let fallbackReply = "Thank you for reaching out! 2nd Gen Roofing is a family-owned Florida roofing company serving Sarasota and Manatee counties with two generations of hands-on experience (Lic. #CCC1333718). Would you like to schedule a free estimate or speak directly with our team at (941) 704-9081?";

    if (lastUserMessage.includes('estimate') || lastUserMessage.includes('quote') || lastUserMessage.includes('cost')) {
      fallbackReply = "We provide 100% free, no-obligation estimates throughout Sarasota and Manatee County! Because every roof differs in pitch, size, layers, and material (shingle, tile, metal, or low-slope), AJ or Alejandro will personally evaluate your roof to give you an accurate, honest written quote with no surprise fees. You can click 'Request Free Estimate' above or call us at (941) 704-9081.";
    } else if (lastUserMessage.includes('repair') || lastUserMessage.includes('leak')) {
      fallbackReply = "For roof repairs—whether it's a sudden leak, wind-damaged shingles, or cracked tiles—we prioritize rapid diagnosis and quality repair work. We always inspect thoroughly before recommending a repair or replacement. Please call us directly at (941) 704-9081 for fast scheduling, or submit an estimate request.";
    } else if (lastUserMessage.includes('area') || lastUserMessage.includes('location') || lastUserMessage.includes('where')) {
      fallbackReply = "We proudly serve both Sarasota County and Manatee County, including Sarasota, Bradenton, North Port, Venice, Ruskin, St. Pete, Osprey, Palmetto, and Parrish. Our offices are located at 2237 Industrial Blvd in Sarasota and 407 52nd Ave in Bradenton.";
    } else if (lastUserMessage.includes('tile') || lastUserMessage.includes('shingle') || lastUserMessage.includes('metal')) {
      fallbackReply = "We specialize in all major Florida roofing systems: architectural shingles (GAF Timberline HDZ, Atlas Pinnacle Pristine, Tamko Heritage), concrete & clay tile reroofs, standing seam metal roofs, and low-slope flat roofing systems built for Florida's coastal sun, wind, and rain.";
    } else if (lastUserMessage.includes('license') || lastUserMessage.includes('insured')) {
      fallbackReply = "2nd Gen Roofing LLC is fully licensed and insured across Florida with State Certified Roofing Contractor license CCC1333718. We also hold an A+ rating with the BBB, are Nextdoor Neighborhood Faves, and carry a 5.0-star rating.";
    }

    return res.json({ reply: fallbackReply });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.json({
      reply: "I apologize, but I'm having a brief connection issue. You can reach 2nd Gen Roofing directly at (941) 704-9081 or click 'Request Free Estimate' to send your request straight to our team.",
    });
  }
});

async function startServer() {
  // Mount Vite middleware in development
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  app.use(vite.middlewares);

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`2nd Gen Roofing server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
