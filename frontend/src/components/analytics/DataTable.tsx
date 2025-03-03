import { motion } from "framer-motion";
import { Download } from "lucide-react";

const posts = [
  {
    post_id: 1,
    user_id: 72,
    post_type: "reels",
    likes: 27374,
    comments: 107,
    share: 547,
    reach: 499766,
    timestamps: "2024-03-14T21:55:56Z",
    content_length: 139,
  },
  {
    post_id: 2,
    user_id: 74,
    post_type: "carousel",
    likes: 9822,
    comments: 544,
    share: 517,
    reach: 7182,
    timestamps: "2024-10-26T06:04:56Z",
    content_length: 209,
  },
  {
    post_id: 3,
    user_id: 40,
    post_type: "static",
    likes: 57040,
    comments: 753,
    share: 124,
    reach: 947827,
    timestamps: "2024-03-05T13:14:53Z",
    content_length: 116,
  },
  {
    post_id: 4,
    user_id: 32,
    post_type: "static",
    likes: 11713,
    comments: 282,
    share: 552,
    reach: 48221,
    timestamps: "2024-12-03T07:25:46Z",
    content_length: 262,
  },
  {
    post_id: 5,
    user_id: 90,
    post_type: "reels",
    likes: 41491,
    comments: 959,
    share: 272,
    reach: 193374,
    timestamps: "2024-04-05T02:30:09Z",
    content_length: 247,
  },
];

const tableHeader = [
  "Post ID",
  "User ID",
  "Type",
  "Likes",
  "Comments",
  "Shares",
  "Reach",
  "Timestamp",
  "Length",
];

const SocialMediaStats = () => {
  const formatDate = (dateString: any) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleDownload = () => {
    const filePath = "/social-media-sample-data.csv"; // Path relative to the public folder
    const a = document.createElement("a");
    a.href = filePath;
    a.download = "social-media-sample-data.csv"; // The name to save the file as
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <motion.div
      id="table"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ scrollMarginTop: "100px" }}
      className="w-full bg-white rounded-lg shadow-lg p-6 dark:bg-dark-100 "
    >
      <div className="flex justify-between items-center mb-6 ">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Data set
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          title="Download CSV"
        >
          <Download className="h-5 w-5" />
        </motion.button>
      </div>

      <div className="overflow-x-auto rounded-lg">
        <table className="w-full min-w-[800px] ">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 ">
              {tableHeader.map((header, index) => (
                <th
                  key={index}
                  className="p-4 text-left font-semibold text-gray-900"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <motion.tr
                key={post.post_id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-100 dark:bg-slate-50 transition-colors"
              >
                <td className="p-4 text-gray-800">{post.post_id}</td>
                <td className="p-4 text-gray-800">{post.user_id}</td>
                <td className="p-4">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${post.post_type === "reels"
                      ? "bg-blue-100 text-blue-800"
                      : post.post_type === "carousel"
                        ? "bg-green-100 text-green-800"
                        : "bg-purple-100 text-purple-800"
                      }`}
                  >
                    {post.post_type}
                  </motion.span>
                </td>
                <td className="p-4 text-gray-800">
                  {post.likes.toLocaleString()}
                </td>
                <td className="p-4 text-gray-800">
                  {post.comments.toLocaleString()}
                </td>
                <td className="p-4 text-gray-800">
                  {post.share.toLocaleString()}
                </td>
                <td className="p-4 text-gray-800">
                  {post.reach.toLocaleString()}
                </td>
                <td className="p-4 text-gray-800">
                  {formatDate(post.timestamps)}
                </td>
                <td className="p-4 text-gray-800">{post.content_length}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default SocialMediaStats;
