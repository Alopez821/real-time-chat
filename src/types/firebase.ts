export interface Message {
    id: string;
    text: string;
    userId: string;
    username: string;
    timestamp: any;
}

export interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
}