'use client';

import { useState, useEffect } from 'react';
import NewsFeed from '@/components/NewsFeed';
import WeatherPanel from '@/components/WeatherPanel';
import AlertsPanel from '@/components/AlertsPanel';
import AISummary from '@/components/AISummary';
import { Alert, NewsArticle } from '@/types';

interface SidebarProps {
  selectedLocation: { lat: number; lng: number; name: string } | null;
  onLocationSelect: (location: { lat: number; lng: number; name: string }) => void;
}

export default function Sidebar({
  selectedLocation,
  onLocationSelect,
}: SidebarProps) {
  const [activeTab, setActiveTab] = useState<'news' | 'weather' | 'alerts' | 'ai'>('news');
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    // Generate mock alerts
    const mockAlerts: Alert[] = [
      {
        id: '1',
        type: 'critical',
        message: 'Unusual trading activity detected',
        timestamp: new Date(),
        location: selectedLocation?.name || 'Global',
        confidence: 0.92,
      },
      {
        id: '2',
        type: 'warning',
        message: 'Weather system approaching',
        timestamp: new Date(Date.now() - 600000),
        location: selectedLocation?.name || 'Global',
        confidence: 0.78,
      },
      {
        id: '3',
        type: 'info',
        message: 'News update available',
        timestamp: new Date(Date.now() - 1200000),
        location: selectedLocation?.name || 'Global',
        confidence: 0.85,
      },
    ];
    setAlerts(mockAlerts);

    // Generate mock news
    const mockNews: NewsArticle[] = [
      {
        id: '1',
        title: 'Global Markets Show Volatility',
        description: 'International stock exchanges report significant movement in trading volume',
        url: '#',
        source: 'Financial Intelligence Network',
        timestamp: new Date(),
        sentiment: 'neutral',
        category: 'market',
      },
      {
        id: '2',
        title: 'Climate Systems Shift Patterns',
        description: 'Meteorological data indicates changes in global weather patterns',
        url: '#',
        source: 'Climate Monitoring System',
        timestamp: new Date(Date.now() - 3600000),
        sentiment: 'negative',
        category: 'weather',
      },
      {
        id: '3',
        title: 'Diplomatic Statement Released',
        description: 'International stakeholders issue joint statement on global cooperation',
        url: '#',
        source: 'Political Intel Database',
        timestamp: new Date(Date.now() - 7200000),
        sentiment: 'positive',
        category: 'political',
      },
    ];
    setNews(mockNews);
  }, [selectedLocation]);

  return (
    <div className="w-96 h-screen bg-intel-dark border-l border-intel-blue/20 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-intel-blue/20">
        <h2 className="text-lg font-bold text-intel-blue mb-2">
          INTELLIGENCE FEED
        </h2>
        {selectedLocation && (
          <p className="text-xs text-gray-400">
            Location: <span className="text-intel-green">{selectedLocation.name}</span>
          </p>
        )}
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-intel-blue/20 px-4 pt-4">
        <button
          onClick={() => setActiveTab('news')}
          className={`pb-2 px-3 text-xs font-bold transition-colors ${
            activeTab === 'news'
              ? 'text-intel-blue border-b-2 border-intel-blue'
              : 'text-gray-500 hover:text-gray-400'
          }`}
        >
          NEWS
        </button>
        <button
          onClick={() => setActiveTab('weather')}
          className={`pb-2 px-3 text-xs font-bold transition-colors ${
            activeTab === 'weather'
              ? 'text-intel-blue border-b-2 border-intel-blue'
              : 'text-gray-500 hover:text-gray-400'
          }`}
        >
          WEATHER
        </button>
        <button
          onClick={() => setActiveTab('alerts')}
          className={`pb-2 px-3 text-xs font-bold transition-colors ${
            activeTab === 'alerts'
              ? 'text-intel-blue border-b-2 border-intel-blue'
              : 'text-gray-500 hover:text-gray-400'
          }`}
        >
          ALERTS
        </button>
        <button
          onClick={() => setActiveTab('ai')}
          className={`pb-2 px-3 text-xs font-bold transition-colors ${
            activeTab === 'ai'
              ? 'text-intel-blue border-b-2 border-intel-blue'
              : 'text-gray-500 hover:text-gray-400'
          }`}
        >
          AI INTEL
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'news' && <NewsFeed articles={news} />}
        {activeTab === 'weather' && (
          <WeatherPanel location={selectedLocation?.name || 'Global'} />
        )}
        {activeTab === 'alerts' && <AlertsPanel alerts={alerts} />}
        {activeTab === 'ai' && (
          <AISummary location={selectedLocation?.name || 'Global'} />
        )}
      </div>
    </div>
  );
}
