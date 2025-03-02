import { ChatLog } from "../types";

export function sanitizeChatLog(chatLog: ChatLog["messages"]) {
  const sanitizedChatLog: ChatLog[] = [];

  let lastUser = "";

  chatLog.forEach((element) => {
    if (element.user !== lastUser) {
      sanitizedChatLog.push({
        messages: [element],
      });
    } else {
      sanitizedChatLog[sanitizedChatLog.length - 1].messages.push(element);
    }
    lastUser = element.user;
  });

  return sanitizedChatLog;
}
