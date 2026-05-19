'use client';

import React, { useEffect, useRef } from 'react';
import { User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'coach';
  timestamp: Date;
}

interface MessageListProps {
  messages: Message[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex items-start gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
        >
          <div
            className={`p-2 rounded-full ${message.sender === 'user'
              ? 'bg-blue-100 dark:bg-blue-900'
              : 'bg-gray-100 dark:bg-gray-700'
              }`}
          >
            {message.sender === 'user' ? (
              <User size={20} className="text-blue-600 dark:text-blue-400" />
            ) : (
              <Bot size={20} className="text-gray-600 dark:text-gray-400" />
            )}
          </div>

          <div
            className={`max-w-[80%] rounded-lg p-3 ${message.sender === 'user'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
              }`}
          >
            <p className="text-sm">{message.text}</p>
            <span className="text-xs opacity-70 mt-1 block">
              {message.timestamp.toLocaleTimeString()}
            </span>
          </div>
        </div>
      ))}

      {/* Dummy div for auto-scroll */}
      <div ref={messagesEndRef} />
    </div>
  );
};
