import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getUrls } from '../utils/storage';
import { UrlData } from '../types/url';

export default function Analytics() {
  const [data, setData] = React.useState<UrlData[]>([]);

  React.useEffect(() => {
    setData(getUrls());
    const interval = setInterval(() => {
      setData(getUrls());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-2xl mx-auto mt-12 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4 text-indian-blue">Click Analytics</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="shortUrl" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="clicks" fill="#FF9933" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}