import { motion } from "framer-motion";
import { ThemeProvider } from "./contexts/ThemeContext";

import StatCard from "./components/StatCard";
import EngagementChart from "./components/EngagementChart";
import TopPosts from "./components/TopPosts";
import ChatPortal from "./components/ChatBot/ChatPortal";
import PostAnalytics from "./components/analytics/PostAnalytics";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import TeamSection from "./components/team/TeamSection";
import AppDescription from "./components/AppDescription";
import DataTable from "./components/analytics/DataTable";
import { stats } from "./utils/calculations";


function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col bg-gray-50 dark:bg-dark-200 min-h-screen transition-colors duration-200">
        <Header />
        <main className="flex-1 p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <AppDescription />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <StatCard
                    title={stat.title}
                    value={stat.value}
                    change={stat.change}
                    Icon={stat.Icon}
                  />
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <EngagementChart />
                </motion.div>
              </div>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <TopPosts />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-8">
              <PostAnalytics />
              <DataTable />
            </div>
            <TeamSection />
          </motion.div>
        </main>
        <Footer />
        <ChatPortal />
      </div>
    </ThemeProvider>
  );
}

export default App;
