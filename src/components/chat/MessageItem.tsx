import { Message } from '@/types/chat';
import { auth } from '@/lib/firebase';

interface MessageItemProps {
  message: Message;
}

export default function MessageItem({ message }: MessageItemProps) {
  const isCurrentUser = message.userId === auth.currentUser?.uid;
  console.log(message.text)

  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`${
          isCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
        } rounded-lg px-4 py-2 max-w-[70%] break-words`}
      >
        <div className="text-sm font-semibold mb-1">
          {message.userName || 'Usuario'}
        </div>
        <div>{message.text}</div>
        <div className="text-xs mt-1 opacity-70 flex items-center justify-end">
        {message.timestamp?.toDate().toLocaleTimeString('es-ES', {
          hour12: true,
          hour: 'numeric',
          minute: '2-digit',
        })}          
        </div>
      </div>
    </div>
  );
}