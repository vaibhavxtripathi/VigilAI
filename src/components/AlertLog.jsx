import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiInfo, FiX, FiBell, FiFilter } from 'react-icons/fi';
import { mockAlerts } from '../data/mockData';
import { formatDistance } from 'date-fns';

export default function AlertLog() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const getAlertIcon = (type) => {
    switch (type) {
      case 'weapon':
        return <FiAlertTriangle className="h-5 w-5 text-error-500" />;
      case 'person':
        return <FiAlertTriangle className="h-5 w-5 text-warning-500" />;
      default:
        return <FiInfo className="h-5 w-5 text-secondary-500" />;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-panel"
    >
      <div className="p-4 border-b border-neutral-200 dark:border-neutral-700 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FiBell className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
          <h2 className="font-semibold text-neutral-900 dark:text-white">Alert Log</h2>
          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent-500 text-white text-xs font-medium">
            {mockAlerts.length}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-1.5 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Filter alerts"
          >
            <FiFilter className="h-4 w-4" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-1.5 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <FiX className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-0' : 'rotate-45'}`} />
          </motion.button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="max-h-80 overflow-y-auto">
          <ul className="divide-y divide-neutral-200 dark:divide-neutral-700">
            {mockAlerts.map(alert => (
              <motion.li
                key={alert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-neutral-900 dark:text-white truncate">
                        {alert.description}
                      </p>
                      <div className="text-xs font-medium text-white px-2 py-0.5 rounded-full bg-primary-500">
                        {alert.confidence}% <span className="opacity-75">conf.</span>
                      </div>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {alert.location}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {formatDistance(alert.timestamp, new Date(), { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="p-3 border-t border-neutral-200 dark:border-neutral-700 flex justify-center">
        <button className="text-xs text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
          View All Alerts
        </button>
      </div>
    </motion.div>
  );
}