import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Film, Image, Images, Heart, MessageCircle, Share } from 'lucide-react';
import data from "../../utils/social-media-data.json"; // Assuming your data is in the correct format

interface MetricCardProps {
  type: string;
  icon: React.ReactNode;
  metrics: {
    likes: number;
    comments: number;
    shares: number;
  };
}

const MetricCard = ({ type, icon, metrics }: MetricCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="bg-white p-4 rounded-lg shadow-sm dark:bg-dark-300"
  >
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h3 className="font-medium dark:text-white">{type}</h3>
    </div>
    <div className="space-y-2 dark:text-gray-300">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1">
          <Heart className="w-4 h-4 text-pink-500" />
          <span>Likes</span>
        </div>
        <span className="font-medium">{metrics.likes.toLocaleString()}</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4 text-indigo-500" />
          <span>Comments</span>
        </div>
        <span className="font-medium">{metrics.comments.toLocaleString()}</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1">
          <Share className="w-4 h-4 text-emerald-500" />
          <span>Shares</span>
        </div>
        <span className="font-medium">{metrics.shares.toLocaleString()}</span>
      </div>
    </div>
  </motion.div>
);

const PostTypeMetrics = () => {
  // Process the data and calculate metrics for each post type
  const metrics = useMemo(() => {
    const postTypeMetrics: { [key: string]: { likes: number; comments: number; shares: number } } = { reels: { likes: 0, comments: 0, shares: 0 }, static: { likes: 0, comments: 0, shares: 0 }, carousel: { likes: 0, comments: 0, shares: 0 } };

    data.forEach((post: { post_type: string; likes: number; comments: number; share: number }) => {
      const postType = post.post_type.toLowerCase();
      if (postTypeMetrics[postType]) {
        postTypeMetrics[postType].likes += post.likes;
        postTypeMetrics[postType].comments += post.comments;
        postTypeMetrics[postType].shares += post.share;
      }
    });

    return [
      {
        type: 'Reels',
        icon: <Film className="w-5 h-5 text-red-500" />,
        metrics: postTypeMetrics.reels,
      },
      {
        type: 'Static',
        icon: <Image className="w-5 h-5 text-purple-500" />,
        metrics: postTypeMetrics.static,
      },
      {
        type: 'Carousel',
        icon: <Images className="w-5 h-5 text-yellow-500" />,
        metrics: postTypeMetrics.carousel,
      },
    ];
  }, [data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((item) => (
        <MetricCard key={item.type} {...item} />
      ))}
    </div>
  );
};

export default PostTypeMetrics;
