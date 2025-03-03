import { Play } from "lucide-react";

const DemoButton = () => {
  return (
    <button
      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors ml-4 shadow-md"
      onClick={() =>
        window.open("https://www.youtube.com/watch?v=HvGaHkaEa80", "_blank")
      }
    >
      <Play className="w-4 h-4" />
      <span>Demo</span>
    </button>
  );
};

export default DemoButton;
