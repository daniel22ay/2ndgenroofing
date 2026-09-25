import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Phone, ArrowRight, ShieldCheck, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';

interface AiChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEstimate: () => void;
}

interface Message {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  quickReplies?: string[];
  actionLink?: { type: 'estimate' | 'call'; label: string };
}

export const AiChatbot: React.FC<AiChatbotProps> = ({ isOpen, onClose, onOpenEstimate }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hi! I'm the 2nd Gen Roofing Assistant. How can I help?",
      quickReplies: [
        'Request a Free Estimate',
        'I Need a Roof Repair',
        "I'm Considering a New Roof",
        'Roof Inspection',
        'What Areas Do You Serve?',
        'Talk to 2nd Gen Roofing',
      ],
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [qualificationStep, setQualificationStep] = useState<number>(0);
  const [leadInfo, setLeadInfo] = useState<{
    serviceNeeded?: string;
    propertyType?: string;
    roofType?: string;
    city?: string;
    name?: string;
    phone?: string;
  }>({});

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsgText = textToSend.trim();
    setInput('');

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: userMessageText(userMsgText),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Check for direct guided qualification flows
    const lower = userMsgText.toLowerCase();

    // Specific quick chip matching:
    if (userMsgText === 'Request a Free Estimate' || userMsgText === "I'm Considering a New Roof") {
      setQualificationStep(1);
      setLeadInfo((prev) => ({ ...prev, serviceNeeded: 'Roof Replacement' }));
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: "We'd love to help with your new roof! To get started, what type of property is this?",
          quickReplies: ['Single Family Home', 'Townhome / Villa', 'Commercial Property', 'Other'],
        },
      ]);
      return;
    }

    if (userMsgText === 'I Need a Roof Repair') {
      setQualificationStep(1);
      setLeadInfo((prev) => ({ ...prev, serviceNeeded: 'Roof Repair' }));
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: "We handle all types of Florida roof leaks and damage. What type of property is having the issue?",
          quickReplies: ['Single Family Home', 'Townhome / Villa', 'Commercial Property', 'Other'],
        },
      ]);
      return;
    }

    if (userMsgText === 'Roof Inspection') {
      setQualificationStep(1);
      setLeadInfo((prev) => ({ ...prev, serviceNeeded: 'Roof Inspection' }));
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: "Our certified roof inspections help evaluate roof condition and storm readiness. What type of roof do you currently have?",
          quickReplies: ['Tile Roof', 'Shingle Roof', 'Metal Roof', 'Low-Slope / Flat', 'Not Sure'],
        },
      ]);
      return;
    }

    if (userMsgText === 'What Areas Do You Serve?') {
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content:
            "2nd Gen Roofing proudly serves all of Sarasota County and Manatee County! Our primary areas include Sarasota, Bradenton, North Port, Venice, Ruskin, St. Pete, Osprey, Palmetto, and Parrish. We have physical locations in both Sarasota (2237 Industrial Blvd) and Bradenton (407 52nd Ave). Would you like to schedule an inspection for your address?",
          quickReplies: ['Request a Free Estimate', 'Talk to 2nd Gen Roofing'],
          actionLink: { type: 'estimate', label: 'Book Estimate for My Area' },
        },
      ]);
      return;
    }

    if (userMsgText === 'Talk to 2nd Gen Roofing') {
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content:
            "You can speak directly with Alejandro or AJ Amaya! You can call us right now at (941) 704-9081 or submit your contact info so we can reach out to you.",
          quickReplies: ['Request a Free Estimate'],
          actionLink: { type: 'call', label: 'Call (941) 704-9081 Now' },
        },
      ]);
      return;
    }

    // Step-by-step qualification helper
    if (qualificationStep === 1) {
      setLeadInfo((prev) => ({ ...prev, propertyType: userMsgText }));
      setQualificationStep(2);
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: "Got it. What type of roof do you have, if you know?",
          quickReplies: ['Tile (Barrel or Flat)', 'Shingle (Architectural)', 'Metal (Standing Seam)', 'Low-Slope / Flat', 'Not Sure'],
        },
      ]);
      return;
    }

    if (qualificationStep === 2) {
      setLeadInfo((prev) => ({ ...prev, roofType: userMsgText }));
      setQualificationStep(3);
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: "What city or neighborhood is the property located in?",
          quickReplies: ['Sarasota', 'Bradenton', 'Lakewood Ranch', 'Venice', 'North Port', 'Osprey'],
        },
      ]);
      return;
    }

    if (qualificationStep === 3) {
      setLeadInfo((prev) => ({ ...prev, city: userMsgText }));
      setQualificationStep(4);
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: "Thank you. To have the 2nd Gen Roofing team review this and prepare your free estimate, what is your name and the best phone number to reach you?",
        },
      ]);
      return;
    }

    if (qualificationStep === 4) {
      setLeadInfo((prev) => ({ ...prev, phone: userMsgText }));
      setQualificationStep(0);
      setIsLoading(false);

      // Attempt to save qualified lead to server
      try {
        fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: leadInfo.name || 'Chatbot Visitor',
            phone: userMsgText,
            serviceNeeded: leadInfo.serviceNeeded || 'Roof Service',
            roofType: leadInfo.roofType || 'Not Specified',
            propertyType: leadInfo.propertyType || 'Home',
            propertyAddress: leadInfo.city || 'Sarasota/Bradenton',
            message: `Lead captured via 2nd Gen AI Assistant. Details: ${JSON.stringify(leadInfo)}`,
          }),
        });
      } catch (e) {
        // ignore
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content:
            "Thanks. I've collected the basic information. The 2nd Gen Roofing team can review your request and help with the next step. Alejandro or AJ will contact you shortly to confirm your free estimate!",
          actionLink: { type: 'estimate', label: 'View Full Estimate Details' },
        },
      ]);
      return;
    }

    // Otherwise, query full-stack backend `/api/chat` powered by @google/genai
    try {
      const historyPayload = messages
        .concat(userMessage)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: historyPayload,
          leadInfo,
        }),
      });

      const data = await res.json();
      const botReply = data.reply || "I don't want to give you inaccurate information. I can help you contact 2nd Gen Roofing directly at (941) 704-9081 or request a free estimate.";

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: botReply,
          actionLink:
            botReply.toLowerCase().includes('estimate') || botReply.toLowerCase().includes('quote')
              ? { type: 'estimate', label: 'Request Free Estimate' }
              : undefined,
        },
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content:
            "I don't want to give you inaccurate information. I can help you contact 2nd Gen Roofing directly. Please give our team a call at (941) 704-9081 or request a free estimate on our website.",
          actionLink: { type: 'call', label: 'Call (941) 704-9081' },
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  function userMessageText(txt: string) {
    return txt;
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-end sm:justify-start p-0 sm:p-6 bg-slate-950/40 backdrop-blur-xs">
      <div className="relative w-full max-w-lg h-[92vh] sm:h-[620px] bg-white sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        
        {/* Chatbot Header */}
        <div className="bg-[#0b2341] text-white p-4 sm:p-5 flex items-center justify-between border-b border-amber-500/20">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-black">
                <Bot className="w-5 h-5" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0b2341]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-extrabold text-sm sm:text-base text-white">2nd Gen Roofing Assistant</h4>
                <span className="text-[10px] font-bold bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-400/30">
                  AI
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                Verified Assistant • Sarasota & Bradenton (Lic. CCC1333718)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                setMessages([
                  {
                    id: 'welcome-reset',
                    role: 'assistant',
                    content: "Hi! I'm the 2nd Gen Roofing Assistant. How can I help?",
                    quickReplies: [
                      'Request a Free Estimate',
                      'I Need a Roof Repair',
                      "I'm Considering a New Roof",
                      'Roof Inspection',
                      'What Areas Do You Serve?',
                      'Talk to 2nd Gen Roofing',
                    ],
                  },
                ]);
                setQualificationStep(0);
              }}
              title="Reset conversation"
              className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close chat window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Safety & Integrity Notice */}
        <div className="bg-amber-50 border-b border-amber-200/80 px-4 py-1.5 text-[11px] text-amber-900 flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Grounded in verified 2nd Gen Roofing facts. No climbing or price guesses.</span>
          </span>
        </div>

        {/* Messages List Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 text-sm">
          {messages.map((msg) => {
            const isBot = msg.role === 'assistant';
            return (
              <div key={msg.id} className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}>
                <div className={`flex items-start gap-2 max-w-[88%] ${isBot ? '' : 'flex-row-reverse'}`}>
                  {isBot ? (
                    <div className="w-7 h-7 rounded-full bg-[#0b2341] text-amber-400 flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                      2G
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center shrink-0 mt-1">
                      <User className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`p-3.5 rounded-2xl shadow-xs leading-relaxed text-xs sm:text-sm ${
                      isBot
                        ? 'bg-white text-slate-800 border border-slate-200 rounded-tl-xs'
                        : 'bg-[#0b2341] text-white rounded-tr-xs font-medium'
                    }`}
                  >
                    {msg.content}

                    {/* Action Link Button if provided */}
                    {msg.actionLink && (
                      <div className="mt-3 pt-2.5 border-t border-slate-100">
                        {msg.actionLink.type === 'estimate' ? (
                          <button
                            onClick={() => {
                              onClose();
                              onOpenEstimate();
                            }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-lg transition-colors shadow-xs"
                          >
                            <span>{msg.actionLink.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <a
                            href="tel:9417049081"
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-lg transition-colors shadow-xs"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>{msg.actionLink.label}</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick Action Chips if present */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="mt-2.5 ml-9 flex flex-wrap gap-1.5">
                    {msg.quickReplies.map((qr, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(qr)}
                        className="px-3 py-1 bg-white hover:bg-amber-50 text-slate-800 hover:text-amber-900 border border-slate-300 hover:border-amber-400 rounded-full text-xs font-semibold shadow-2xs transition-all cursor-pointer"
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-slate-500 ml-9">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.4s]" />
              <span>2nd Gen Assistant is typing...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(input);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about roofs, repairs, areas, or request an estimate..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-slate-100 rounded-xl text-xs sm:text-sm outline-none focus:ring-2 focus:ring-[#0b2341]/20 border border-slate-200"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2.5 bg-[#0b2341] hover:bg-[#12365e] text-white rounded-xl disabled:opacity-40 transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="flex items-center justify-between mt-2 text-[10px] text-slate-400 px-1">
            <span>Official 2nd Gen Website Assistant</span>
            <a href="tel:9417049081" className="text-amber-700 font-bold hover:underline">
              Call directly: (941) 704-9081
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
