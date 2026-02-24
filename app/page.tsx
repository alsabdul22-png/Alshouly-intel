'use client';

import { useState, useEffect } from 'react';
import MapComponent from '@/components/MapComponent';
import Sidebar from '@/components/Sidebar';
import { EventType } from '@/types';

export default function Home() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
    name: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulate loading events on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Load initial mock events
      setEvents(generateMockEvents());
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex h-screen w-screen overflow-hidden bg-intel-dark">
      {/* Map Component */}
      <div className="flex-1 relative">
        <MapComponent
          events={events}
          selectedLocation={selectedLocation}
          onLocationSelect={setSelectedLocation}
        />
      </div>

      {/* Sidebar */}
      <Sidebar
        selectedLocation={selectedLocation}
        onLocationSelect={setSelectedLocation}
      />
    </main>
  );
}

function generateMockEvents(): EventType[] {
  const mockLocations = [
    {
      id: '1',
      lat: 51.5074,
      lng: -0.1278,
      name: 'London',
      country: 'UK',
      intensity: 0.7,
    },
    {
      id: '2',
      lat: 48.8566,
      lng: 2.3522,
      name: 'Paris',
      country: 'France',
      intensity: 0.5,
    },
    {
      id: '3',
      lat: 52.52,
      lng: 13.405,
      name: 'Berlin',
      country: 'Germany',
      intensity: 0.6,
    },
    {
      id: '4',
      lat: 40.7128,
      lng: -74.006,
      name: 'New York',
      country: 'USA',
      intensity: 0.8,
    },
    {
      id: '5',
      lat: 35.6762,
      lng: 139.6503,
      name: 'Tokyo',
      country: 'Japan',
      intensity: 0.4,
    },
    {
      id: '6',
      lat: -33.8688,
      lng: 151.2093,
      name: 'Sydney',
      country: 'Australia',
      intensity: 0.3,
    },
  ];

  return mockLocations.map((loc) => ({
    ...loc,
    type: ['market', 'political', 'weather', 'security'][
      Math.floor(Math.random() * 4)
    ] as 'market' | 'political' | 'weather' | 'security',
    timestamp: new Date(Date.now() - Math.random() * 3600000),
    description: `Activity detected in ${loc.name}`,
  }));
}
