export interface Message {
  id: string;
  content: string;
  role: "user" | "system";
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
}
