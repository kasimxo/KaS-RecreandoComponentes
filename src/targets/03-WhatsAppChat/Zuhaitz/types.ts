export type ChatLog = {
  messages: Message[];
};

export type Message = {
  date: Date;
  user: string;
  content: string;
};
