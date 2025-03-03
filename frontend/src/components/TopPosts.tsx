import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useMemo } from "react";
import data from "../utils/social-media-data.json"; // Assuming your data is in the correct format

const TopPosts = () => {
  // Process the data to group by post type and count the number of posts per type
  const processedData = useMemo(() => {
    const postTypeCounts: Record<string, number> = { reels: 0, static: 0, carousel: 0 };

    data.forEach((post) => {
      if (post.post_type === "reels") postTypeCounts.reels += 1;
      else if (post.post_type === "carousel") postTypeCounts.carousel += 1;
      else postTypeCounts.static += 1;
    });

    // Convert the counts to a percentage
    const totalPosts = data.length;
    return Object.entries(postTypeCounts).map(([type, count]) => ({
      name: type.charAt(0).toUpperCase() + type.slice(1), // Capitalize the type
      value: (count / totalPosts) * 100, // Convert to percentage
    }));
  }, [data]);

  const COLORS = ["#06B6D4", "#F97316", "#EAB308"];

  return (
    <div className="bg-white py-7 px-5 rounded-xl border border-gray-100 dark:border-dark-300 dark:bg-dark-100 shadow-xl">
      <h2 className="text-lg font-semibold mb-6 dark:text-white">
        Content Distribution
      </h2>
      <div className="w-full h-72 mt-10 mb-10">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={processedData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {processedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `${value}%`}
              contentStyle={{
                backgroundColor: "var(--tw-bg-opacity-1, white)",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                color: "var(--tw-text-opacity-1, black)",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                padding: "12px",
              }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => (
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {processedData.map((item, index) => (
          <div key={item.name} className="text-center">
            <p
              className="text-2xl font-semibold"
              style={{ color: COLORS[index] }}
            >
              {item.value.toFixed(0)}%
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPosts;
