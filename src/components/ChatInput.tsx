import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent -translate-y-full h-20 pointer-events-none"></div>
      <div className="flex items-center gap-2 border-t border-blue-500/30 p-4 bg-gray-800/95 backdrop-blur-sm">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your message..."
          disabled={disabled}
          className="flex-1 rounded-lg border border-blue-500/30 bg-gray-900 px-4 py-2 text-blue-100 placeholder-blue-300/50 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 disabled:opacity-50 pulse-border"
        />
        <button
          type="submit"
          disabled={!input.trim() || disabled}
          className="rounded-lg bg-blue-600 p-2 text-white transition-all hover:bg-blue-700 disabled:opacity-50 relative group"
        >
          <Send className="h-5 w-5" />
          <div className="absolute inset-0 sci-fi-glow rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>
    </form>
  );
};