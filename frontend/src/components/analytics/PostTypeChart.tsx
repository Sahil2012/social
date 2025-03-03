import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from "../../utils/social-media-data.json"; // Assuming your data is in the correct format

const PostTypeChart = () => {
  // Process the data to group by post type and sum up the likes, comments, and shares
  const processedData: { [key: string]: { likes: number; comments: number; shares: number } } = data.reduce((acc: { [key: string]: { likes: number; comments: number; shares: number } }, post) => {
    const postType = post.post_type;
    if (!acc[postType]) {
      acc[postType] = { likes: 0, comments: 0, shares: 0 };
    }
    acc[postType].likes += post.likes;
    acc[postType].comments += post.comments;
    acc[postType].shares += post.share;
    return acc;
  }, {});

  const chartData = Object.entries(processedData).map(([type, values]) => ({
    type,
    likes: (values.likes / 15).toFixed(2), // Scale down the likes data by 1000 (adjust as needed)
    comments: values.comments,
    shares: values.shares,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--tw-bg-opacity-1, white)",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              color: "var(--tw-text-opacity-1, black)",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              padding: "12px",
            }} />
          <Legend />
          <Bar dataKey="likes" fill="#06B6D4" name="Likes" />
          <Bar dataKey="comments" fill="#F97316" name="Comments" />
          <Bar dataKey="shares" fill="#EAB308" name="Shares" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default PostTypeChart;
