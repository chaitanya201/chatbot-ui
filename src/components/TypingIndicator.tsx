import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-2 px-4 py-2">
      <div className="flex space-x-1">
        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400 sci-fi-glow" style={{ animationDelay: '0ms' }} />
        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400 sci-fi-glow" style={{ animationDelay: '150ms' }} />
        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400 sci-fi-glow" style={{ animationDelay: '300ms' }} />
      </div>
      <span className="text-sm text-blue-300">AI Processing...</span>
    </div>
  );
};