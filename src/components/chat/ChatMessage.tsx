import React from 'react';

export interface Message {
  id: string;
  content: string;
  isBot: boolean;
}

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[80%] rounded-lg px-4 py-2 ${
        message.isBot 
          ? 'bg-gray-800 text-white' 
          : 'bg-purple-600 text-white'
      }`}>
        <p className="text-sm">{message.content}</p>
      </div>
    </div>
  );
}