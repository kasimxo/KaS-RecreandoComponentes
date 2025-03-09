export type ChatLog = {
  messages: Message[];
};

export type Message = {
  _id: number;
  date: Date;
  user: string;
  content: string;
};
