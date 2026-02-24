# 🗺️ Mapbox Token Setup - Schnellanleitung

## Problem: "Karte wird nicht angezeigt"

Die Karte wird nicht geladen, weil Sie einen **eigenen Mapbox Token** benötigen.

---

## ✅ Lösung in 5 Minuten

### Schritt 1: Token erstellen (KOSTENLOS)
1. Gehen Sie zu: **https://account.mapbox.com/tokens/**
2. Klicken Sie auf "Create a token"
3. Geben Sie einen Namen ein (z.B. "Intel Dashboard")
4. Klicken Sie auf "Create token"
5. **Den Token kopieren** (lange Zeichenkette, beginnt mit `pk.`)

### Schritt 2: Token in die Datei einfügen
1. Öffnen Sie `index.html` mit Texteditator (Notepad, VS Code, etc.)
2. Suchen Sie nach dieser Zeile (ca. Zeile 816):
   ```javascript
   mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycWx4bHJ0ejBkY3gifQ.rJcFIG214AriISLbB6B5aw';
   ```
3. Ersetzen Sie den Token-Text mit **Ihrem Token**:
   ```javascript
   mapboxgl.accessToken = 'pk.EUER_TOKEN_HIER';
   ```
4. Drücken Sie **Ctrl+S** zum Speichern

### Schritt 3: Neu laden
1. Aktualisieren Sie die Browser-Seite (Ctrl+F5 oder Cmd+Shift+R)
2. ✅ Die Karte wird jetzt angezeigt!

---

## 📋 Token-Beispiel

**FALSCH:**
```javascript
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycWx4bHJ0ejBkY3gifQ.rJcFIG214AriISLbB6B5aw';
```

**RICHTIG:** (mit eigenem Token)
```javascript
mapboxgl.accessToken = 'pk.eyJ1IjoiaWhrYXJ1IiwiYSI6ImNsbGowbTBhejAwMGR0a3BvcHBqbHkifQ.abc123xyz...';
```

---

## 🆓 Ist Mapbox kostenlos?

**JA!** Mapbox hat ein großzügiges kostenloses Kontingent:
- ✅ 50,000 Kartenladen/Monat (kostenlos)
- ✅ 100 MB Storage/Monat
- ✅ Perfekt für diese Anwendung

**Kosten entstehen erst bei:**
- > 50,000 Kartenladen pro Monat
- Besondere Features

Für diese Dashboard = **komplett kostenlos** 🎉

---

## 🔧 Browser-Konsole überprüfen

Wenn die Karte immer noch nicht angezeigt wird:

1. Drücken Sie **F12** (Developer Tools öffnen)
2. Gehen Sie zur **Console** Registerkarte
3. Suchen Sie nach roten Fehlern mit "mapbox" oder "token"
4. Das sollte das Problem zeigen

---

## ⚠️ Häufige Fehler

| Fehler | Lösung |
|--------|--------|
| "Unauthorized" | Token ist ungültig - neuen erstellen |
| "403 Forbidden" | Token hat keine Berechtigung für Maps API |
| "Network error" | Internet-Verbindung überprüfen |
| "Blank map" | Browser-Cache leeren (Ctrl+Shift+Delete) |

---

## 💡 Pro-Tipps

1. **Token sicher machen**: In Produktionsumgebung Token auf Backend-Server halten
2. **Scopes begrenzen**: Token nur Lese-Zugriff für Maps geben
3. **Rate Limits**: Beobachten Sie Verbrauch in Mapbox Dashboard

---

**Brauchen Sie weitere Hilfe?**
- Mapbox Dokumentation: https://docs.mapbox.com/
- Support: https://support.mapbox.com/

✅ **Fertig!** Karte sollte jetzt funktionieren.
