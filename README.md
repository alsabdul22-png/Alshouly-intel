# Intel OSINT Dashboard

A modern, dark-themed intelligence dashboard for real-time global data visualization and analysis. Built with Next.js, Mapbox GL, and TailwindCSS for a military-grade aesthetic.

## Features

### 🗺️ Interactive World Map
- **Fullscreen Mapbox Integration**: Dark-themed world map with smooth zoom and pan controls
- **Animated Markers**: Color-coded intelligence markers with pulse animations
  - 🔴 Security (Red)
  - 🔵 Market (Blue)
  - 🟢 Political (Green)
  - 🟠 Weather (Orange)
- **Real-time Location Tracking**: Select locations to view detailed intelligence

### 📰 Intelligence Feed
- **Live News Feed**: Aggregated world news with sentiment analysis
- **Weather Intelligence**: Current conditions and forecast data
- **Alerts System**: Multi-level alert system (Critical, Warning, Info)
- **AI Analysis Engine**: Intelligent summaries of threats and opportunities

### 🎨 UI/UX
- **Glass Panel Design**: Frosted glass aesthetic with transparency
- **Cyber Glow Effects**: Neon blue, green, and red accent colors
- **Futuristic Typography**: Minimal, clean font hierarchy
- **Dark Theme**: Full dark mode with AMOLED-friendly colors
- **Smooth Animations**: Loading skeletons, pulsing markers, transitions

### 🤖 AI Intelligence Layer
- Automated threat detection and analysis
- Opportunity identification
- Confidence-weighted reporting
- Geographic focus analysis

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Styling**: TailwindCSS 3
- **Maps**: Mapbox GL JS v3
- **Language**: TypeScript
- **UI Components**: React 18+
- **Animation**: CSS animations & transitions

## Installation

### 1. Clone or Open the Project
```bash
cd intel-osint-dashboard
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Mapbox Token
Get your free Mapbox token from [Mapbox Account](https://account.mapbox.com/tokens/):

Create `.env.local`:
```env
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Mapbox styles
│   ├── globals.css         # Global styles and animations
│   └── page.tsx            # Main dashboard page
├── components/
│   ├── MapComponent.tsx    # Mapbox map with markers
│   ├── Sidebar.tsx         # Tab-based sidebar container
│   ├── NewsFeed.tsx        # News articles display
│   ├── WeatherPanel.tsx    # Weather data visualization
│   ├── AlertsPanel.tsx     # Multi-level alert system
│   └── AISummary.tsx       # AI intelligence analysis
├── types/
│   └── index.ts            # TypeScript interfaces
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Component Architecture

### MapComponent
Renders the fullscreen Mapbox GL map with:
- Dark style configuration
- Animated color-coded markers
- Zoom/pan controls
- Location selection callback

### Sidebar
Tab-based container with four intelligence panels:
1. **NewsFeed** - Article aggregation with sentiment
2. **WeatherPanel** - Meteorological data
3. **AlertsPanel** - Threat alerting system
4. **AISummary** - Intelligent analysis engine

### Supporting Components
Each panel is a modular component for easy customization and scaling.

## Customization

### Colors
Edit `tailwind.config.js` to customize the Intel color scheme:
```js
colors: {
  'intel-dark': '#0a0e27',
  'intel-blue': '#00d4ff',
  'intel-green': '#00ff41',
  'intel-red': '#ff0055',
}
```

### Map Style
In `MapComponent.tsx`, change the map style:
```ts
style: 'mapbox://styles/mapbox/dark-v11', // or other Mapbox styles
```

### API Integration
Replace mock data with real APIs:
- **News**: Integrate NewsAPI or similar
- **Weather**: Use OpenWeatherMap or WeatherAPI
- **Stock Data**: Bloomberg, AlphaVantage, etc.

## Performance Optimization

- Lazy loading components
- Optimized re-renders with React hooks
- Mapbox marker clustering (ready for large datasets)
- CSS animations for smooth 60fps transitions
- Next.js image optimization ready

## Adding Real Data

### News Feed Integration
```typescript
// In components/NewsFeed.tsx, add:
const response = await fetch(
  `https://newsapi.org/v2/everything?q=news&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
);
```

### Weather Integration
```typescript
// In components/WeatherPanel.tsx, add:
const response = await fetch(
  `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}`
);
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Responsive on tablet/mobile (sidebar collapses)

## Building for Production

```bash
# Build the project
npm run build

# Start production server
npm run start

# Or deploy to Vercel
npm install -g vercel
vercel
```

## Security Notes

- All API keys are environment variables (not in commits)
- Uses NEXT_PUBLIC prefix only for safe, public tokens
- Sensitive keys kept in `.env.local` (excluded from git)

## Contributing

Feel free to extend the dashboard with:
- Real API integrations
- Additional intelligence panels
- Advanced map layers
- Custom visualization widgets
- Real-time WebSocket data

## License

Open source - Modify and use freely for intelligence and monitoring applications.

## Support

For issues or questions, refer to documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Mapbox Docs](https://docs.mapbox.com/mapbox-gl-js/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)

---

**Built with intelligence in mind. Stay informed, stay secure.**
