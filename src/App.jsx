import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import CameraFeed from './components/CameraFeed'
import AlertLog from './components/AlertLog'
import StatusCard from './components/StatusCard'
import SurveillanceControls from './components/SurveillanceControls'
import MapView from './components/MapView'

function App() {
  const [isActive, setIsActive] = useState(false);
  
  const toggleSurveillance = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <HeroBanner />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content - camera feed and alerts */}
          <div className="lg:col-span-2 space-y-6">
            <CameraFeed isActive={isActive} />
            <AlertLog />
          </div>
          
          {/* Side panel - controls and status */}
          <div className="space-y-6">
            <SurveillanceControls 
              isActive={isActive} 
              toggleSurveillance={toggleSurveillance} 
            />
            <StatusCard />
            <MapView />
          </div>
        </div>
      </main>
      
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-neutral-500 dark:text-neutral-400">
          VigilAI Dashboard &copy; 2025. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App