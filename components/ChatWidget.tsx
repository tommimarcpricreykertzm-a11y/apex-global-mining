import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Cpu, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage, MessageRole } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t, language } = useLanguage();
  
  // Initialize messages with the localized welcome message
  // We need to update the welcome message when language changes if it's the only message
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    // Reset or update welcome message when language changes, 
    // but only if the user hasn't started chatting yet to avoid context loss
    if (messages.length <= 1) {
      setMessages([{
        id: 'welcome',
        role: MessageRole.Model,
        text: t.chat_welcome,
        timestamp: new Date()
      }]);
    }
  }, [language, t.chat_welcome]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: MessageRole.User,
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Format history for Gemini
    const history = messages.map(m => ({
      role: m.role === MessageRole.Model ? 'model' : 'user',
      parts: [{ text: m.text }]
    }));

    try {
      const responseText = await sendMessageToGemini(history, userMessage.text);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: MessageRole.Model,
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 group ${
          isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100 bg-corporate-gold hover:bg-white'
        }`}
      >
        <MessageCircle className="w-8 h-8 text-corporate-900" />
        <span className="absolute right-0 top-0 -mt-1 -mr-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-100 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[450px] h-[600px] max-h-[80vh] flex flex-col bg-corporate-900 border border-slate-600 shadow-2xl rounded-2xl overflow-hidden glass-panel"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-corporate-900 to-slate-800 p-4 border-b border-slate-700 flex justify-between items-center relative overflow-hidden">
               {/* Decorative background element */}
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Cpu className="w-24 h-24 text-corporate-gold" />
               </div>
              
              <div className="flex items-center space-x-3 z-10">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center border border-slate-500">
                  <Sparkles className="w-5 h-5 text-corporate-gold" />
                </div>
                <div>
                  <h3 className="text-white font-bold font-serif tracking-wide">ApexBot</h3>
                  <p className="text-slate-400 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                    {t.chat_online}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === MessageRole.User ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                      msg.role === MessageRole.User
                        ? 'bg-corporate-gold text-corporate-900 rounded-br-none font-medium'
                        : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-bl-none p-4 flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 text-corporate-gold animate-spin" />
                    <span className="text-xs text-slate-400">{t.chat_processing}</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-corporate-900 border-t border-slate-700">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={t.chat_input_placeholder}
                  className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-full pl-6 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-corporate-gold focus:bg-slate-700 transition-all border border-slate-600"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-corporate-gold rounded-full flex items-center justify-center text-corporate-900 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
              <div className="text-center mt-2">
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                  {t.chat_powered}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;