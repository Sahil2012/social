import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number | string;
  change: number;
  Icon: LucideIcon;
}


const StatCard = ({ title, value, change, Icon }: StatCardProps) => {
  const isPositive = change >= 0;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-dark-100 p-6 rounded-xl border border-gray-100 dark:border-dark-300 hover:shadow-lg dark:hover:shadow-dark-md transition-all"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-800 dark:text-gray-300">{title}</h3>
          <p className="text-2xl font-semibold dark:text-white mt-1">{value}</p>
        </div>
        <motion.div
          whileHover={{ rotate: 15 }}
          className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg"
        >
          <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        </motion.div>
      </div>
      <div className="mt-4">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-sm font-medium ${isPositive
            ? 'text-green-600 dark:text-green-400'
            : 'text-red-600 dark:text-red-400'
            }`}
        >
          {isPositive ? '+' : ''}{change}%
        </motion.span>
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">vs last month</span>
      </div>
    </motion.div>
  );
};

export default StatCard;