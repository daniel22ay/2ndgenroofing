import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Phone, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

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
      content: userMsgText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Quick chip routing
    if (userMsgText === 'Request a Free Estimate' || userMsgText === "I'm Considering a New Roof") {
      setQualificationStep(1);
      setLeadInfo((prev) => ({ ...prev, serviceNeeded: 'Roof Replacement' }));
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: "We'd love to help with your new roof! What type of property is this?",
          quickReplies: ['Single Family Home', 'Townhome / Villa', 'Commercial', 'Other'],
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
          content: "We handle all types of roof leaks and damage. What type of property is having the issue?",
          quickReplies: ['Single Family Home', 'Townhome / Villa', 'Commercial', 'Other'],
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
          content: "Our certified roof inspections assess storm readiness and lifespan. What type of roof do you have?",
          quickReplies: ['Tile Roof', 'Shingle Roof', 'Metal Roof', 'Low-Slope', 'Not Sure'],
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
            "We serve all of Sarasota & Manatee County (Sarasota, Bradenton, North Port, Venice, Ruskin, St. Pete, Osprey, Palmetto, Parrish). Would you like to schedule an inspection?",
          quickReplies: ['Request a Free Estimate', 'Talk to 2nd Gen Roofing'],
          actionLink: { type: 'estimate', label: 'Get Free Estimate' },
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
            "You can reach Alejandro or AJ Amaya directly at (941) 704-9081, or leave your phone number for a prompt callback.",
          quickReplies: ['Request a Free Estimate'],
          actionLink: { type: 'call', label: 'Call (941) 704-9081' },
        },
      ]);
      return;
    }

    // Step-by-step qualification
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
          quickReplies: ['Tile', 'Shingle', 'Metal', 'Low-Slope / Flat', 'Not Sure'],
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
          content: "Thank you. What is your name and the best phone number to reach you?",
        },
      ]);
      return;
    }

    if (qualificationStep === 4) {
      setLeadInfo((prev) => ({ ...prev, phone: userMsgText }));
      setQualificationStep(0);
      setIsLoading(false);

      try {
        fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: leadInfo.name || 'Chatbot Lead',
            phone: userMsgText,
            serviceNeeded: leadInfo.serviceNeeded || 'Roof Service',
            roofType: leadInfo.roofType || 'Not Specified',
            propertyType: leadInfo.propertyType || 'Home',
            propertyAddress: leadInfo.city || 'Sarasota/Bradenton',
            message: `Captured via 2nd Gen Assistant. Details: ${JSON.stringify(leadInfo)}`,
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
            "Thanks! I've noted your details. Alejandro or AJ Amaya will contact you shortly to confirm your free estimate.",
          actionLink: { type: 'estimate', label: 'View Estimate Details' },
        },
      ]);
      return;
    }

    // Backend query
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
      const botReply = data.reply || "I can help you connect directly with 2nd Gen Roofing at (941) 704-9081 or request a free estimate.";

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
            "Please call our team directly at (941) 704-9081 or request a free estimate on our website.",
          actionLink: { type: 'call', label: 'Call (941) 704-9081' },
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-end sm:justify-start p-0 sm:p-5 bg-slate-950/30 backdrop-blur-2xs">
      {/* Compact Chat Window: 360px wide, 480px tall on desktop */}
      <div className="relative w-full sm:w-[360px] h-[85vh] sm:h-[480px] bg-white sm:rounded-2xl shadow-xl flex flex-col overflow-hidden border border-slate-200">
        
        {/* Compact Header */}
        <div className="bg-[#0b2341] text-white px-3.5 py-2.5 flex items-center justify-between border-b border-amber-500/20">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-black">
                <Bot className="w-4 h-4" />
              </div>
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border border-[#0b2341]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 leading-tight">
                <h4 className="font-bold text-xs text-white">2nd Gen Assistant</h4>
                <span className="text-[9px] font-bold bg-amber-400/20 text-amber-300 px-1 py-0.2 rounded">
                  AI
                </span>
              </div>
              <p className="text-[10px] text-slate-300 leading-none mt-0.5">
                Lic. CCC1333718
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
              title="Reset"
              className="p-1 text-slate-300 hover:text-white rounded hover:bg-slate-800 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-1 text-slate-300 hover:text-white rounded hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Compact Safety Banner */}
        <div className="bg-amber-50/90 border-b border-amber-200/60 px-3 py-1 text-[10px] text-amber-900 flex items-center justify-between">
          <span className="flex items-center gap-1 font-medium">
            <ShieldCheck className="w-3 h-3 text-amber-600 shrink-0" />
            <span>Verified 2nd Gen facts • Free estimates</span>
          </span>
          <a href="tel:9417049081" className="font-bold text-amber-800 hover:underline text-[10px]">
            (941) 704-9081
          </a>
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-3 overflow-y-auto space-y-2.5 bg-slate-50 text-xs">
          {messages.map((msg) => {
            const isBot = msg.role === 'assistant';
            return (
              <div key={msg.id} className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}>
                <div className={`flex items-start gap-1.5 max-w-[90%] ${isBot ? '' : 'flex-row-reverse'}`}>
                  {isBot ? (
                    <div className="w-5 h-5 rounded-full bg-[#0b2341] text-amber-400 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                      2G
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3 h-3" />
                    </div>
                  )}

                  <div
                    className={`p-2.5 rounded-xl shadow-2xs leading-relaxed text-xs ${
                      isBot
                        ? 'bg-white text-slate-800 border border-slate-200 rounded-tl-xs'
                        : 'bg-[#0b2341] text-white rounded-tr-xs font-medium'
                    }`}
                  >
                    {msg.content}

                    {/* Action Link Button */}
                    {msg.actionLink && (
                      <div className="mt-2 pt-1.5 border-t border-slate-100">
                        {msg.actionLink.type === 'estimate' ? (
                          <button
                            onClick={() => {
                              onClose();
                              onOpenEstimate();
                            }}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] rounded-md transition-colors"
                          >
                            <span>{msg.actionLink.label}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        ) : (
                          <a
                            href="tel:9417049081"
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] rounded-md transition-colors"
                          >
                            <Phone className="w-3 h-3" />
                            <span>{msg.actionLink.label}</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick Action Chips */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="mt-1.5 ml-6.5 flex flex-wrap gap-1">
                    {msg.quickReplies.map((qr, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(qr)}
                        className="px-2 py-0.5 bg-white hover:bg-amber-50 text-slate-800 hover:text-amber-900 border border-slate-300 hover:border-amber-400 rounded-full text-[10px] font-medium shadow-2xs transition-all cursor-pointer"
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
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 ml-6.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce [animation-delay:0.2s]" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce [animation-delay:0.4s]" />
              <span>typing...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-2.5 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(input);
            }}
            className="flex items-center gap-1.5"
          >
            <input
              type="text"
              placeholder="Ask anything or request an estimate..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-1.5 bg-slate-100 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[#0b2341]/30 border border-slate-200"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-1.5 bg-[#0b2341] hover:bg-[#12365e] text-white rounded-lg disabled:opacity-40 transition-colors shrink-0 cursor-pointer"
              aria-label="Send"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="flex items-center justify-between mt-1 text-[9px] text-slate-400 px-0.5">
            <span>Official 2nd Gen Assistant</span>
            <a href="tel:9417049081" className="text-amber-700 font-semibold hover:underline">
              (941) 704-9081
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
