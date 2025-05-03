import { motion } from 'framer-motion';
import { FiPlay, FiPause, FiSettings } from 'react-icons/fi';

export default function SurveillanceControls({ isActive, toggleSurveillance }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass-panel p-4 flex flex-col items-center"
    >
      <div className="relative w-full flex justify-center pb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleSurveillance}
          className={`w-24 h-24 rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all ${
            isActive 
              ? 'bg-error-500 text-white focus:ring-error-200 dark:focus:ring-error-900' 
              : 'bg-success-500 text-white focus:ring-success-200 dark:focus:ring-success-900'
          }`}
        >
          <div className="relative">
            {isActive ? (
              <>
                <FiPause className="h-10 w-10" />
                <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-white"></span>
              </>
            ) : (
              <FiPlay className="h-10 w-10" />
            )}
          </div>
        </motion.button>
        
        <button className="absolute right-0 top-0 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
          <FiSettings className="h-5 w-5" />
        </button>
      </div>
      
      <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
        {isActive ? 'Stop Surveillance' : 'Start Surveillance'}
      </h3>
      
      <p className="mt-1 text-sm text-center text-neutral-500 dark:text-neutral-400">
        {isActive 
          ? 'AI is actively monitoring the camera feed for suspicious activity' 
          : 'Press the button to begin AI-powered surveillance'}
      </p>
      
      {isActive && (
        <div className="mt-4 w-full grid grid-cols-2 gap-3 text-center">
          <div className="rounded-lg p-2 bg-neutral-100 dark:bg-neutral-800">
            <div className="text-secondary-500 font-semibold">14</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">Total Alerts</div>
          </div>
          <div className="rounded-lg p-2 bg-neutral-100 dark:bg-neutral-800">
            <div className="text-primary-500 font-semibold">2</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">Critical</div>
          </div>
        </div>
      )}
    </motion.div>
  );
}