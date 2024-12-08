import React from 'react';
import { motion } from 'framer-motion';
import { Link2, BarChart2, Zap } from 'lucide-react';

const steps = [
  {
    icon: Link2,
    title: 'Paste Your URL',
    description: 'Enter your long URL into the input field above.'
  },
  {
    icon: Zap,
    title: 'Get Short Link',
    description: 'Instantly receive your shortened, easy-to-share URL.'
  },
  {
    icon: BarChart2,
    title: 'Track Performance',
    description: 'Monitor clicks and analyze your link performance.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-indian-blue mb-4">How It Works</h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Three simple steps to transform your long URLs into short, trackable links
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md"
            >
              <div className="bg-indian-saffron/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <step.icon className="h-6 w-6 text-indian-saffron" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indian-blue text-center">{step.title}</h3>
              <p className="text-gray-800 text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}