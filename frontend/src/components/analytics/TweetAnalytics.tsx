import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Repeat, Heart, MessageCircle } from 'lucide-react';

const data = [
  { name: 'Retweets', value: 400, color: '#10B981' },
  { name: 'Likes', value: 800, color: '#EC4899' },
  { name: 'Replies', value: 300, color: '#6366F1' },
];

const TweetAnalytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 shadow-sm"
    >
      <h2 className="text-lg font-semibold mb-6">Tweet Performance</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-4">
          {data.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
            >
              <div className="flex items-center gap-3">
                {item.name === 'Retweets' && <Repeat className="w-5 h-5" style={{ color: item.color }} />}
                {item.name === 'Likes' && <Heart className="w-5 h-5" style={{ color: item.color }} />}
                {item.name === 'Replies' && <MessageCircle className="w-5 h-5" style={{ color: item.color }} />}
                <span className="font-medium">{item.name}</span>
              </div>
              <span className="text-lg font-semibold">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TweetAnalytics;