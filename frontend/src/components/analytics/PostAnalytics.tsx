import { motion } from "framer-motion";
import PostTypeChart from "./PostTypeChart";
import PostTypeMetrics from "./PostTypeMetrics";

const PostAnalytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-dark-100 rounded-xl p-6 shadow-xl"
    >
      <h2 className="text-lg font-semibold mb-6  dark:text-white">
        Post Performance by Type
      </h2>
      <div className="space-y-6">
        <PostTypeChart />
        <PostTypeMetrics />
      </div>
    </motion.div>
  );
};

export default PostAnalytics;
