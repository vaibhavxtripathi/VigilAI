import { motion } from 'framer-motion';
import { FiVideo, FiShield, FiEye } from 'react-icons/fi';

export default function HeroBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative p-6 md:p-8 mb-6 glass-panel"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
            Real-time Crime Detection with AI
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
            VigilAI uses advanced machine learning to identify potential threats and criminal activity in real-time through video surveillance.
          </p>
          
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm">
              <FiShield className="h-3.5 w-3.5" />
              <span>Enhanced Security</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 text-sm">
              <FiVideo className="h-3.5 w-3.5" />
              <span>24/7 Monitoring</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm">
              <FiEye className="h-3.5 w-3.5" />
              <span>AI-Powered Detection</span>
            </div>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 md:mt-0 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
        >
          View Documentation
        </motion.button>
      </div>
      
      <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 overflow-hidden opacity-50 dark:opacity-30 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-300/30 to-secondary-300/30 rounded-bl-full" />
      </div>
    </motion.div>
  );
}