'use client';
import ChatContainer from '@/components/chat/ChatContainer';
import { useChat } from '@/hooks/useChat';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const { messages, sendMessage, loading } = useChat();
  const { signOut } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  return (
      <main className="flex flex-col h-screen">
        <header className="bg-white shadow p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-semibold">Chat App</h1>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 text-sm text-red-600 hover:text-red-700"
            >
              Cerrar sesión
            </button>
          </div>
        </header>
        <div className="flex-1 max-w-4xl mx-auto w-full">
          <ChatContainer 
            messages={messages} 
            onSendMessage={sendMessage} 
          />
        </div>
      </main>
  );
}