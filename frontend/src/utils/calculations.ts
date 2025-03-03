import { Heart, Handshake, Share2, TrendingUp } from "lucide-react"; // Import your icons
import { LucideIcon } from 'lucide-react';


import data from "./social-media-data.json"; // Import your JSON data



// Define the structure of the JSON data
interface PostData {
  post_id: number;
  user_id: number;
  post_type: string;
  likes: number;
  comments: number;
  share: number;
  reach: number;
  timestamps: string; // ISO timestamp
  content_length: number;
}

// Define the structure of the stats
interface Stat {
  title: string;
  value: number | string;
  change: number; // Percentage change as a number
  Icon: LucideIcon;
}

// Function to calculate statistics
const calculateStats = (data: PostData[]): Stat[] => {
  // Group data by month and year
 const groupByMonth: Record<string, PostData[]> = data.reduce((acc: Record<string, PostData[]>, post) => {
    const monthYear = new Date(post.timestamps).toISOString().slice(0, 7); // YYYY-MM
    if (!acc[monthYear]) acc[monthYear] = [];
    acc[monthYear].push(post);
    return acc;
  }, {});

  // Generate stats for each month
  const monthlyStats = Object.entries(groupByMonth).map(([month, posts]) => {
    const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
    const totalComments = posts.reduce((sum, post) => sum + post.comments, 0);
    const totalShares = posts.reduce((sum, post) => sum + post.share, 0);
    const totalReach = posts.reduce((sum, post) => sum + post.reach, 0);
    const engagementRate =
      totalReach > 0 ? ((totalLikes + totalComments + totalShares) / totalReach) * 100 : 0;

    return {
      month,
      totalLikes,
      engagementRate,
      totalShares,
      averageReach: totalReach / posts.length || 0,
    };
  });

  // Sort monthlyStats by month (descending)
  monthlyStats.sort((a, b) => new Date(b.month).getTime() - new Date(a.month).getTime());

  // Calculate the monthly change for each stat as a percentage (number)
  const latestStats = monthlyStats[0] || {};
  const previousStats = monthlyStats[1] || {};

  const calculateChange = (current: number, previous: number): number =>
    previous && previous !== 0 ? ((current - previous) / previous) * 100 : 0;

  return [
    {
      title: "Total Likes",
      value: latestStats.totalLikes || 0,
      change: parseFloat(calculateChange(latestStats.totalLikes || 0, previousStats.totalLikes || 0).toFixed(2)),
      Icon: Heart,
    },
    {
      title: "Engagement Rate",
      value: parseFloat((latestStats.engagementRate || 0).toFixed(2)),
      change: parseFloat(
        calculateChange(latestStats.engagementRate || 0, previousStats.engagementRate || 0).toFixed(
          2
        )
      ),
      Icon: Handshake,
    },
    {
      title: "Total Shares",
      value: latestStats.totalShares || 0,
      change: parseFloat(calculateChange(latestStats.totalShares || 0, previousStats.totalShares || 0).toFixed(2)),
      Icon: Share2,
    },
    {
      title: "Average Reach",
      value: Math.round(latestStats.averageReach || 0),
      change: parseFloat(calculateChange(latestStats.averageReach || 0, previousStats.averageReach || 0).toFixed(2)),
      Icon: TrendingUp,
    },
  ];
};

// Calculate stats using the data
const stats: Stat[] = calculateStats(data);

export { stats}
