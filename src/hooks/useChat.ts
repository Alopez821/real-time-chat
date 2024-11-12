import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '@/lib/firebase';
import { Message } from '@/types/chat';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messageList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Message));
      
      setMessages(messageList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async (text: string) => {
    if (!auth.currentUser) return;

    await addDoc(collection(db, 'messages'), {
      text,
      timestamp: serverTimestamp(),
      userId: 213214321,
      userName: 'User'
    });
  };

  return {
    messages,
    loading,
    sendMessage
  };
}