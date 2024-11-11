'use client';
import ChatContainer from '@/components/chat/ChatContainer';
import { useChat } from '@/hooks/useChat';

export default function Home() {
  const { messages, sendMessage, loading } = useChat();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto h-screen">
      <ChatContainer 
        messages={messages} 
        onSendMessage={sendMessage} 
      />
    </main>
  );
}