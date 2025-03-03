import { useEffect, useRef, useState } from "react";
import { Bot } from "lucide-react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: string;
}

const LoadingDots = () => {
  const dots = [0, 0.2, 0.4]; // Animation delays for dots
  return (
    <div className="flex space-x-2 p-4">
      {dots.map((delay, index) => (
        <div
          key={index}
          className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"
          style={{ animationDelay: `${delay}s` }}
        ></div>
      ))}
    </div>
  );
};

const ChatPortal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Welcome to social.ai 🤖 I am your personal Assistant! I can help you with:\n\n• Analytics insights\n• Performance metrics\n• Content recommendations\n• Custom reports\n\nHow can I assist you today?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const backendRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL as string;

    // init websocket
    backendRef.current = new WebSocket(url);

    //onOpen
    backendRef.current.onopen = () => {
      console.log("Connection Established.");
    };

    //onMessage
    backendRef.current.onmessage = (event) => {
      try {
        const response = JSON.parse(event.data); // Attempt to parse the response as JSON
        console.log(response); // Check the structure of the data

        // Check if 'agent' exists in the response
        if (response && response.agent) {
          const newMsg = {
            id: messages.length + 1,
            text: response.agent, // Use response.agent if it exists
            isBot: true,
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          setMessages((prevMsg) => [...prevMsg, newMsg]);
          setIsLoading(false);
        } else {
          console.error("Agent field not found in the message response");
        }
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
        setIsLoading(false);
      }
    };

    //onClose
    backendRef.current.onclose = () => {
      console.log("Connection Closed.");
    };

    // when unmonunt close the connection
    return () => {
      if (backendRef.current) {
        backendRef.current.close();
      }
    };
  }, []);

  const handleSend = (message: string) => {
    // check if the connection is active and message is not empty
    if (message.trim() && backendRef.current?.readyState == WebSocket.OPEN) {
      setIsLoading(true);
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        isBot: false,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      // send message to gemini
      backendRef.current.send(message);

      setMessages((prevMsg) => [...prevMsg, newMessage]);
    } else {
      console.error("Either Connection is lost or message is empty");
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-8 bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 animate-bounce group sm:p-6"
      >
        <Bot className="w-6 h-6 sm:w-12 sm:h-12" />
        <span className="absolute -top-2 -right-2 bg-accent-danger text-white text-xs font-bold px-2 py-1 rounded-full">
          1
        </span>
        <span className="absolute -left-20 text-wrap -top-16 bg-white dark:bg-dark-100 text-gray-800 dark:text-gray-200 p-2 rounded-lg shadow-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Ask me anything about your analytics!
        </span>
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-8 right-8 w-[95vw] sm:w-[400px] md:w-[450px] 
      bg-white dark:bg-dark-100 rounded-xl shadow-2xl 
      transition-all transform hover:scale-[1.02] z-50
      ${isMinimized ? "h-[72px]" : "h-[600px] max-h-[calc(100vh-120px)]"}`}
    >
      <ChatHeader
        onClose={() => setIsOpen(false)}
        onMinimize={() => setIsMinimized(!isMinimized)}
      />

      {!isMinimized && (
        <>
          <div className="p-4 h-[calc(100%-144px)] overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.text}
                isBot={message.isBot}
                timestamp={message.timestamp}
              />
            ))}
            {isLoading && (
              <div className="flex items-start gap-2 p-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <LoadingDots />
              </div>
            )}
          </div>
          <ChatInput onSend={handleSend} />
        </>
      )}
    </div>
  );
};

export default ChatPortal;
