'use client';

import { useState, useEffect } from 'react';
import { AIReport } from '@/types';

interface AISummaryProps {
  location: string;
}

export default function AISummary({ location }: AISummaryProps) {
  const [report, setReport] = useState<AIReport | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate AI analysis
    const timer = setTimeout(() => {
      setReport({
        id: '1',
        location,
        summary: `Intelligence analysis for ${location} indicates elevated activity in financial and geopolitical sectors. Current threat assessment suggests moderate stability with emerging opportunities in emerging markets.`,
        threats: [
          'Increased volatility in equity markets',
          'Geopolitical tensions in region',
          'Supply chain disruptions detected',
        ],
        opportunities: [
          'Strategic partnerships emerging',
          'Technology sector growth indicators',
          'Trade agreements in development',
        ],
        confidence: 0.87,
        timestamp: new Date(),
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="p-4">
      <div className="glass-panel p-4 mb-4">
        <h3 className="text-sm font-bold text-intel-green mb-3">AI ANALYSIS ENGINE</h3>

        {loading ? (
          <div className="space-y-3">
            <div className="skeleton h-12 rounded"></div>
            <div className="skeleton h-6 rounded"></div>
            <div className="skeleton h-6 rounded w-3/4"></div>
          </div>
        ) : report ? (
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-400 mb-2">SUMMARY</p>
              <p className="text-xs leading-relaxed text-gray-300">
                {report.summary}
              </p>
            </div>

            <div className="flex items-center gap-2 p-2 bg-intel-green/10 rounded">
              <span className="text-xs text-gray-400">CONFIDENCE:</span>
              <div className="flex-1 h-2 bg-gray-700 rounded overflow-hidden">
                <div
                  className="h-full bg-intel-green"
                  style={{ width: `${report.confidence * 100}%` }}
                ></div>
              </div>
              <span className="text-xs font-bold text-intel-green">
                {Math.round(report.confidence * 100)}%
              </span>
            </div>
          </div>
        ) : (
          <p className="text-xs text-gray-500">Unable to generate AI report</p>
        )}
      </div>

      {/* Threats */}
      {report && (
        <>
          <div className="glass-panel p-4 mb-4 border-l-2 border-intel-red">
            <h4 className="text-xs font-bold text-intel-red mb-3">IDENTIFIED THREATS</h4>
            <ul className="space-y-2">
              {report.threats.map((threat, i) => (
                <li key={i} className="flex gap-2 text-xs items-start">
                  <span className="text-intel-red mt-1">▪</span>
                  <span className="text-gray-300">{threat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Opportunities */}
          <div className="glass-panel p-4 border-l-2 border-intel-green">
            <h4 className="text-xs font-bold text-intel-green mb-3">
              OPPORTUNITIES DETECTED
            </h4>
            <ul className="space-y-2">
              {report.opportunities.map((opp, i) => (
                <li key={i} className="flex gap-2 text-xs items-start">
                  <span className="text-intel-green mt-1">▪</span>
                  <span className="text-gray-300">{opp}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
