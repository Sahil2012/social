import { motion } from "framer-motion";
import { Bot, BrainCircuit, Network } from "lucide-react";

const AppDescription = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-dark-100 rounded-xl p-8 shadow-xl mb-8"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary dark:text-primary-light lg:text-4xl mb-3">
          Intelligent RAG-Powered Analytics
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Experience the power of Retrieval-Augmented Generation (RAG) combined
          with Langflow's advanced processing capabilities. Our platform
          delivers intelligent insights and real-time analytics for your social
          media performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-dark-300">
            <BrainCircuit className="w-8 h-8  text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 dark:text-white">
              Smart Analysis
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Advanced AI processing for deeper insights
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-50 dark:bg-dark-300">
            <Network className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 dark:text-white">
              RAG Technology
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Context-aware information retrieval
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-50 dark:bg-dark-300">
            <Bot className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 dark:text-white">AI Assistant</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              24/7 intelligent support and insights
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AppDescription;
