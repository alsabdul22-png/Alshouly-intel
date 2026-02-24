## QUICK START GUIDE - Intel OSINT Dashboard

### ⚡ Fastest Way (30 seconds)

**Windows:**
1. Double-click `run.bat`
2. Open browser to: http://localhost:8000/index.html
3. Done! Dashboard is live.

**macOS/Linux:**
```bash
python3 -m http.server 8000
# Open: http://localhost:8000/index.html
```

---

### 🖱️ Using the Dashboard

**Map Interaction:**
- click markers = zoom to location
- + / − buttons = zoom in/out
- ⟲ button = reset to world view

**View Intelligence Data:**
- NEWS tab: Latest intelligence with timestamps
- WEATHER tab: Meteorological data and forecast
- ALERTS tab: Critical/warning/info system alerts
- AI INTEL tab: Professional analyst briefings

**System Indicators:**
- Bottom bar shows: ONLINE status, SIGNAL strength, DATAFLOW active, UTC time
- Green blinking dots = system active
- All data is simulated for demo purposes

---

### 🎨 What Makes It Professional

✓ Glassmorphism design (frosted glass panels)
✓ Realistic intelligence software aesthetic
✓ Cyan/green tactical color scheme
✓ Grid overlay on map
✓ Subtle scan line effect
✓ UTC clock (live updating)
✓ Professional typography with proper letter-spacing
✓ Analyst-style briefings (not marketing copy)
✓ Multi-level alert system
✓ Confidence scoring on all intelligence

---

### 📝 Customization Tips

**Change Colors:**
Open `index.html` in text editor, find `:root` section:
```css
--intel-blue: #00d4ff;   /* Change accent color */
--intel-green: #00ff41;  /* Change success color */
```

**Update News Articles:**
Search for `mockNews` in JavaScript section, modify titles/descriptions

**Add Your Location:**
Add to `mockLocations` array with lat/lng coordinates

**Change Briefings:**
Edit `brevaries` object in `loadAISummary()` function

---

### 🚀 Deployment

**Option 1: Vercel (Easiest)**
```bash
npm install -g vercel
vercel
```

**Option 2: GitHub Pages**
Push to GitHub, enable Pages in settings

**Option 3: Traditional Web Server**
Copy `index.html` to any web server

---

### ❓ Troubleshooting

**Map not loading?**
- Check internet connection (Mapbox needs HTTPS)
- Validate Mapbox token in `index.html`

**Server won't start?**
- Make sure Python is installed: `python --version`
- Try: `python3 -m http.server 8000`

**Clock not updating?**
- Check browser console (F12) for JS errors
- Refresh page (Ctrl+R or Cmd+R)

---

### 📚 Files Explained

- **index.html** - Complete dashboard (HTML + CSS + JS in one file)
- **run.bat** - Windows quick start script
- **README.md** - Full documentation
- **README_PROFESSIONAL.md** - Technical specifications

---

### 💡 Pro Tips

1. **Fullscreen mode**: Press F11 for immersive viewing
2. **Select locations**: Click any marker on the map to see location-specific intelligence
3. **Real data**: Replace mock data functions with API calls to real services
4. **Mobile**: Works on tablets, resize sidebar for smaller screens
5. **Printing**: CSS optimized for print (for reports)

---

**Everything you see is production-ready HTML/CSS/JavaScript. No build tools, no dependencies. Just a modern, professional intelligence dashboard.**

Enjoy! 🎯
