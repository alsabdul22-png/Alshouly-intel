'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { EventType } from '@/types';

interface MapComponentProps {
  events: EventType[];
  selectedLocation: { lat: number; lng: number; name: string } | null;
  onLocationSelect: (location: { lat: number; lng: number; name: string }) => void;
}

mapboxgl.accessToken =
  process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbHF0NWxrMzAwMDAwIn0.example';

export default function MapComponent({
  events,
  selectedLocation,
  onLocationSelect,
}: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<{ [key: string]: mapboxgl.Marker }>({});

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [0, 20],
      zoom: 2,
      pitch: 0,
      bearing: 0,
    });

    map.current.on('load', () => {
      // Add layer for countries
      if (map.current) {
        map.current.addSource('countries', {
          type: 'vector',
          url: 'mapbox://mapbox.mapbox-streets-v8',
        });
      }
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  // Update markers when events change
  useEffect(() => {
    if (!map.current) return;

    // Remove old markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};

    // Add new markers
    events.forEach((event) => {
      const el = document.createElement('div');
      el.className = 'marker';

      const color =
        event.type === 'security'
          ? '#ff0055'
          : event.type === 'market'
            ? '#00d4ff'
            : event.type === 'political'
              ? '#00ff41'
              : '#ffaa00';

      el.style.width = '12px';
      el.style.height = '12px';
      el.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='8' fill='${encodeURIComponent(color)}'/%3E%3Ccircle cx='12' cy='12' r='5' fill='rgba(255,255,255,0.3)'/%3E%3C/svg%3E")`;
      el.style.backgroundSize = 'contain';
      el.style.cursor = 'pointer';
      el.style.filter = `drop-shadow(0 0 8px ${color})`;
      el.style.animation = 'pulse 2s infinite';

      el.onclick = () => {
        onLocationSelect({
          lat: event.lat,
          lng: event.lng,
          name: event.name,
        });
      };

      const marker = new mapboxgl.Marker(el)
        .setLngLat([event.lng, event.lat])
        .addTo(map.current!);

      markersRef.current[event.id] = marker;
    });

    // Add pulsing animation style
    if (!document.querySelector('#pulse-style')) {
      const style = document.createElement('style');
      style.id = 'pulse-style';
      style.textContent = `
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
      `;
      document.head.appendChild(style);
    }
  }, [events, onLocationSelect]);

  // Pan to selected location
  useEffect(() => {
    if (selectedLocation && map.current) {
      map.current.flyTo({
        center: [selectedLocation.lng, selectedLocation.lat],
        zoom: 5,
        duration: 1500,
      });
    }
  }, [selectedLocation]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />

      {/* Map Header */}
      <div className="absolute top-4 left-4 z-10 glass-panel p-4 max-w-sm">
        <h1 className="text-xl font-bold text-intel-blue mb-2">
          INTEL OSINT DASHBOARD
        </h1>
        <p className="text-xs text-gray-400">
          Real-time global intelligence monitoring system
        </p>
      </div>

      {/* Marker Legend */}
      <div className="absolute bottom-4 left-4 z-10 glass-panel p-3">
        <p className="text-xs font-bold mb-2 text-intel-blue">MARKERS</p>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-intel-red"></div>
            <span>Security</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-intel-blue"></div>
            <span>Market</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-intel-green"></div>
            <span>Political</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ffaa00' }}></div>
            <span>Weather</span>
          </div>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 z-10 glass-panel flex flex-col gap-2 p-2">
        <button
          className="p-2 hover:bg-intel-blue/20 transition-colors rounded"
          onClick={() => map.current?.zoomIn()}
          title="Zoom In"
        >
          <span className="text-intel-blue">+</span>
        </button>
        <button
          className="p-2 hover:bg-intel-blue/20 transition-colors rounded"
          onClick={() => map.current?.zoomOut()}
          title="Zoom Out"
        >
          <span className="text-intel-blue">−</span>
        </button>
        <button
          className="p-2 hover:bg-intel-blue/20 transition-colors rounded"
          onClick={() => map.current?.flyTo({ center: [0, 20], zoom: 2 })}
          title="Reset"
        >
          <span className="text-intel-blue text-xs">⟲</span>
        </button>
      </div>

      {/* Coordinates */}
      <div className="absolute bottom-4 right-4 z-10 glass-panel p-3 text-xs">
        <p className="text-gray-400">
          {selectedLocation
            ? `${selectedLocation.name} [${selectedLocation.lat.toFixed(4)}, ${selectedLocation.lng.toFixed(4)}]`
            : 'Select a location'}
        </p>
      </div>
    </div>
  );
}
