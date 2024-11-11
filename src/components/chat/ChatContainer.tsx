'use client';
import { useEffect, useRef } from 'react';
import MessageItem from './MessageItem';
import MessageInput from './MessageInput';
import { Message } from '@/types/chat';

interface ChatContainerProps {
  messages: Message[];
  onSendMessage: (text: string) => Promise<void>;
}

export default function ChatContainer({ messages, onSendMessage }: ChatContainerProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
}