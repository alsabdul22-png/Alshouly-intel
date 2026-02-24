import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Intel OSINT Dashboard',
  description: 'Real-time intelligence and open-source information dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-intel-dark text-white overflow-hidden">
        {children}
      </body>
    </html>
  );
}
