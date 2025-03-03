import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: string;
}

const ChatMessage = ({ message, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 ${isBot ? "" : "flex-row-reverse"}`}>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isBot ? "bg-primary/10 text-primary" : "bg-gray-100 dark:bg-dark-300"
        }`}
      >
        {isBot ? (
          <Bot className="w-4 h-4" />
        ) : (
          <User className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        )}
      </div>
      <div className={`flex-1 max-w-[80%] ${isBot ? "mr-12" : "ml-12"}`}>
        <div
          className={`rounded-2xl p-3 whitespace-pre-line ${
            isBot
              ? "bg-gray-100 dark:bg-dark-300 text-gray-800 dark:text-gray-200"
              : "bg-primary text-white"
          }`}
        >
          {message}
        </div>
        <span className="text-xs text-gray-400 mt-1 block">{timestamp}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
