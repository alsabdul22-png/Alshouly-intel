export interface EventType {
  id: string;
  lat: number;
  lng: number;
  name: string;
  country: string;
  type: 'market' | 'political' | 'weather' | 'security';
  intensity: number;
  timestamp: Date;
  description: string;
  details?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  image?: string;
  source: string;
  timestamp: Date;
  sentiment: 'positive' | 'negative' | 'neutral';
  category: string;
}

export interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export interface Alert {
  id: string;
  type: 'warning' | 'critical' | 'info';
  message: string;
  timestamp: Date;
  location?: string;
  confidence: number;
}

export interface AIReport {
  id: string;
  location: string;
  summary: string;
  threats: string[];
  opportunities: string[];
  confidence: number;
  timestamp: Date;
}
