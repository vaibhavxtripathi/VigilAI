import { subSeconds } from 'date-fns';

// Generate mock alerts with timestamps going back in time
const now = new Date();

export const mockAlerts = [
  {
    id: 1,
    type: 'weapon',
    description: 'Weapon Detected',
    confidence: 92,
    location: 'Entrance A',
    timestamp: subSeconds(now, 14),
    status: 'critical'
  },
  {
    id: 2,
    type: 'person',
    description: 'Unauthorized Person',
    confidence: 86,
    location: 'Server Room',
    timestamp: subSeconds(now, 48),
    status: 'warning'
  },
  {
    id: 3,
    type: 'motion',
    description: 'Unusual Motion Pattern',
    confidence: 78,
    location: 'Parking Lot C',
    timestamp: subSeconds(now, 94),
    status: 'warning'
  },
  {
    id: 4,
    type: 'vehicle',
    description: 'Unauthorized Vehicle',
    confidence: 89,
    location: 'Gate B',
    timestamp: subSeconds(now, 127),
    status: 'warning'
  },
  {
    id: 5,
    type: 'behavior',
    description: 'Suspicious Behavior',
    confidence: 76,
    location: 'Corridor 2',
    timestamp: subSeconds(now, 189),
    status: 'info'
  },
  {
    id: 6,
    type: 'object',
    description: 'Abandoned Object',
    confidence: 82,
    location: 'Main Hall',
    timestamp: subSeconds(now, 243),
    status: 'info'
  },
  {
    id: 7,
    type: 'weapon',
    description: 'Firearm Detected',
    confidence: 95,
    location: 'ATM Location',
    timestamp: subSeconds(now, 310),
    status: 'critical'
  },
  {
    id: 8,
    type: 'person',
    description: 'Known Offender',
    confidence: 91,
    location: 'Entrance B',
    timestamp: subSeconds(now, 378),
    status: 'critical'
  }
];

export const systemStatus = {
  model: {
    status: 'Running',
    lastUpdate: subSeconds(now, 17),
    version: 'v2.3.1'
  },
  connection: {
    status: 'Connected',
    latency: '24ms',
    uptime: '3d 7h 22m'
  },
  performance: {
    frameRate: 29.8,
    cpuUsage: 47,
    memoryUsage: 64
  }
};

export const cameraLocations = [
  { id: 1, name: 'Main Entrance', lat: 34.052235, lng: -118.243683 },
  { id: 2, name: 'Parking Lot A', lat: 34.053235, lng: -118.241683 },
  { id: 3, name: 'Server Room', lat: 34.051235, lng: -118.242683 },
  { id: 4, name: 'Gate B', lat: 34.050235, lng: -118.244683 }
];