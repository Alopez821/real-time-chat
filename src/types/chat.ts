export interface Message {
    id: string;
    text: string;
    timestamp: any;
    userId: string | null;
    userName: string | null;
  }
  
  export interface ChatProps {
    messages: Message[];
    onSendMessage: (text: string) => Promise<void>;
  }