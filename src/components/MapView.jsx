import { motion } from 'framer-motion';
import { FiMap, FiMapPin } from 'react-icons/fi';
import { cameraLocations } from '../data/mockData';

export default function MapView() {
  // In a real app, you'd use a mapping library like Leaflet or Google Maps
  // For this example, we'll create a simplified map visualization
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass-panel"
    >
      <div className="p-4 border-b border-neutral-200 dark:border-neutral-700 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FiMap className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
          <h2 className="font-semibold text-neutral-900 dark:text-white">Location Map</h2>
        </div>
      </div>
      
      <div className="p-4">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg h-40 relative overflow-hidden">
          {/* Placeholder map - in a real app, you'd use an actual map library */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-900">
            {/* Decorative grid lines */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
              {Array.from({ length: 48 }).map((_, i) => (
                <div 
                  key={i} 
                  className="border-t border-l border-neutral-300/30 dark:border-white/5"
                ></div>
              ))}
            </div>
            
            {/* Decorative roads */}
            <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-neutral-400/20 dark:bg-white/10"></div>
            <div className="absolute top-0 bottom-0 left-1/3 w-1.5 bg-neutral-400/20 dark:bg-white/10"></div>
            <div className="absolute top-1/4 right-0 w-1/2 h-1.5 bg-neutral-400/20 dark:bg-white/10"></div>
          </div>
          
          {/* Camera location markers */}
          {cameraLocations.map((location, index) => {
            // Convert lat/lng to relative positions for the demo
            // This is just for visualization - in a real app, you'd use proper map coordinates
            const left = (index % 4) * 20 + 10;
            const top = Math.floor(index / 2) * 30 + 20;
            
            return (
              <div 
                key={location.id}
                className="absolute"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <div className="relative">
                  <div className="absolute -top-1 -left-1 w-8 h-8 bg-primary-500/20 rounded-full animate-pulse-slow"></div>
                  <FiMapPin className="h-6 w-6 text-primary-500 drop-shadow" />
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="px-1.5 py-0.5 bg-white/90 dark:bg-neutral-800/90 text-xs rounded shadow-sm text-neutral-800 dark:text-neutral-200">
                      {location.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-3 text-xs text-neutral-500 dark:text-neutral-400 text-center">
          Interactive map will be available in the next update
        </div>
      </div>
    </motion.div>
  );
}