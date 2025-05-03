import { motion } from 'framer-motion';
import { FiCpu, FiWifi, FiActivity } from 'react-icons/fi';
import { systemStatus } from '../data/mockData';
import { formatDistanceToNow } from 'date-fns';

export default function StatusCard() {
  const { model, connection, performance } = systemStatus;
  
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'running':
      case 'connected':
        return 'active';
      case 'paused':
      case 'disconnected':
        return 'inactive';
      default:
        return 'warning';
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-panel"
    >
      <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
        <h2 className="font-semibold text-neutral-900 dark:text-white">System Status</h2>
      </div>
      
      <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
        <div className="p-4 flex items-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
            <FiCpu className="h-5 w-5" />
          </div>
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-neutral-900 dark:text-white">AI Model</h3>
              <span className={`status-badge ${getStatusClass(model.status)}`}>
                {model.status}
              </span>
            </div>
            <div className="mt-1 flex items-center justify-between text-sm">
              <span className="text-neutral-500 dark:text-neutral-400">Version {model.version}</span>
              <span className="text-neutral-500 dark:text-neutral-400">
                Updated {formatDistanceToNow(model.lastUpdate, { addSuffix: true })}
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-4 flex items-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400">
            <FiWifi className="h-5 w-5" />
          </div>
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-neutral-900 dark:text-white">Connection</h3>
              <span className={`status-badge ${getStatusClass(connection.status)}`}>
                {connection.status}
              </span>
            </div>
            <div className="mt-1 flex items-center justify-between text-sm">
              <span className="text-neutral-500 dark:text-neutral-400">Latency: {connection.latency}</span>
              <span className="text-neutral-500 dark:text-neutral-400">Uptime: {connection.uptime}</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 flex items-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
            <FiActivity className="h-5 w-5" />
          </div>
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-neutral-900 dark:text-white">Performance</h3>
              <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                {performance.frameRate.toFixed(1)} FPS
              </span>
            </div>
            
            <div className="mt-2 grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-500 dark:text-neutral-400">CPU</span>
                  <span className="text-neutral-700 dark:text-neutral-300">{performance.cpuUsage}%</span>
                </div>
                <div className="mt-1 w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-1.5">
                  <div 
                    className="bg-primary-500 h-1.5 rounded-full" 
                    style={{ width: `${performance.cpuUsage}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-500 dark:text-neutral-400">Memory</span>
                  <span className="text-neutral-700 dark:text-neutral-300">{performance.memoryUsage}%</span>
                </div>
                <div className="mt-1 w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-1.5">
                  <div 
                    className="bg-secondary-500 h-1.5 rounded-full" 
                    style={{ width: `${performance.memoryUsage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}