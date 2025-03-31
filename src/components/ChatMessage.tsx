import React from "react";
import { Bot, User } from "lucide-react";
import { Message } from "../types/chat";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.role === "system";

  return (
    <div
      className={`flex items-start gap-4 ${isBot ? "" : "flex-row-reverse"}`}
    >
      <div
        className={`relative flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full ${
          isBot ? "bg-blue-900" : "bg-blue-700"
        }`}
      >
        {isBot ? (
          <Bot className="h-5 w-5 text-blue-300" />
        ) : (
          <User className="h-5 w-5 text-blue-200" />
        )}
        <div className="absolute inset-0 sci-fi-glow rounded-full"></div>
      </div>
      <div
        className={`relative flex max-w-[80%] flex-col gap-1 rounded-lg px-4 py-2 ${
          isBot
            ? "bg-gray-800 text-blue-100 border border-blue-500/30"
            : "bg-blue-600 text-white border border-blue-400/30"
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <span className="text-[10px] opacity-50">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
        <div className="absolute inset-0 sci-fi-glow rounded-lg opacity-30"></div>
      </div>
    </div>
  );
};
