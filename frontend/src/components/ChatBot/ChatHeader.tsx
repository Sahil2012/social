import { X, Minus } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
  onMinimize: () => void;
}

const ChatHeader = ({ onClose, onMinimize }: ChatHeaderProps) => {
  return (
    <div className="bg-primary text-white p-4 rounded-t-xl flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-accent-success"></div>
        <h3 className="font-medium">Support Chat</h3>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onMinimize}
          className="hover:bg-primary-dark p-1 rounded transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        <button
          onClick={onClose}
          className="hover:bg-primary-dark p-1 rounded transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
