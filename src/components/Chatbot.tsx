import React, { useState, useRef, useEffect } from "react";
import { Bot, Cpu, MessageCircle, X } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { TypingIndicator } from "./TypingIndicator";
import { ChatState, Message } from "../types/chat";
import { generateChatbotResponse } from "../services/chatbot";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [chatState, setChatState] = useState<ChatState>({
    messages: [
      {
        id: "1",
        content: "Greetings, human. How may I assist you today?",
        role: "system",
        timestamp: new Date(),
      },
    ],
    isTyping: false,
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date(),
    };

    setChatState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isTyping: true,
    }));

    const response = await generateChatbotResponse({ data: chatState });

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: response?.data?.responseData,
      role: "system",
      timestamp: new Date(),
    };

    setChatState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      isTyping: false,
    }));
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 rounded-full bg-blue-600 p-3 sm:p-4 text-white shadow-lg transition-all hover:bg-blue-700 group attention-bounce ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        <div className="absolute inset-0 sci-fi-glow rounded-full opacity-0 group-hover:opacity-100"></div>
      </button>
      {isOpen && (
        <div className=" min-h-[100vh] max-w-xl mx-auto">
          <div className="flex flex-col bg-gray-900">
            <header className="bg-gray-800 border-b border-blue-500/30">
              <div className="mx-auto flex justify-between max-w-xl px-4 py-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Cpu className="h-8 w-8 text-blue-400 float-animation" />
                    <div className="absolute inset-0 sci-fi-glow rounded-full"></div>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-blue-400">
                      Chaitanya's ChatBot
                    </h1>
                    <p className="text-xs text-blue-300/70">Version v2.5</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className=" text-blue-300/70 hover:text-blue-300 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </header>

            <main className="flex-1 relative ">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.1),rgba(0,0,0,0))]"></div>
              <div className="mx-auto max-w-xl relative">
                <div className="h-[calc(100vh-10.5rem)] overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-800">
                  <div className="flex flex-col gap-4">
                    {chatState.messages.map((message) => (
                      <ChatMessage key={message.id} message={message} />
                    ))}
                    {chatState.isTyping && <TypingIndicator />}
                    <div ref={messagesEndRef} />
                  </div>
                </div>
                <ChatInput
                  onSendMessage={handleSendMessage}
                  disabled={chatState.isTyping}
                />
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
