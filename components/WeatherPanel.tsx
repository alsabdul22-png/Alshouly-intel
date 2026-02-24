'use client';

import { useState, useEffect } from 'react';
import { WeatherData } from '@/types';

interface WeatherPanelProps {
  location: string;
}

export default function WeatherPanel({ location }: WeatherPanelProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading weather data
    const timer = setTimeout(() => {
      setWeather({
        temp: Math.floor(Math.random() * 30) + 5,
        condition:
          ['Clear', 'Cloudy', 'Rainy', 'Stormy'][Math.floor(Math.random() * 4)],
        humidity: Math.floor(Math.random() * 50) + 40,
        windSpeed: Math.floor(Math.random() * 30) + 5,
        icon: '🌍',
      });
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="p-4">
      <div className="glass-panel p-4 mb-4">
        <h3 className="text-sm font-bold text-intel-blue mb-4">
          METEOROLOGICAL DATA
        </h3>

        {loading ? (
          <div className="space-y-3">
            <div className="skeleton h-8 rounded"></div>
            <div className="skeleton h-6 rounded"></div>
            <div className="skeleton h-6 rounded"></div>
          </div>
        ) : weather ? (
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-4xl mb-2">{weather.icon}</div>
              <p className="text-2xl font-bold text-intel-green">{weather.temp}°C</p>
              <p className="text-xs text-gray-400 mt-1">{weather.condition}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-intel-blue/10 p-3 rounded">
                <p className="text-xs text-gray-500 mb-1">HUMIDITY</p>
                <p className="text-lg font-bold text-intel-blue">
                  {weather.humidity}%
                </p>
              </div>
              <div className="bg-intel-blue/10 p-3 rounded">
                <p className="text-xs text-gray-500 mb-1">WIND SPEED</p>
                <p className="text-lg font-bold text-intel-blue">
                  {weather.windSpeed} km/h
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-xs text-gray-500">Unable to load weather data</p>
        )}
      </div>

      {/* Forecast */}
      <div className="glass-panel p-4">
        <h3 className="text-sm font-bold text-intel-blue mb-3">FORECAST</h3>
        <div className="space-y-2">
          {['Tomorrow', '+2 Days', '+3 Days'].map((period, i) => (
            <div key={i} className="flex items-center justify-between p-2 bg-intel-blue/5 rounded">
              <span className="text-xs text-gray-400">{period}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs">{Math.floor(Math.random() * 20) + 10}°C</span>
                <span className="text-sm">
                  {['☀️', '⛅', '🌧️'][Math.floor(Math.random() * 3)]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
