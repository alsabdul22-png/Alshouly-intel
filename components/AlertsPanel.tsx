'use client';

import { Alert } from '@/types';

interface AlertsPanelProps {
  alerts: Alert[];
}

export default function AlertsPanel({ alerts }: AlertsPanelProps) {
  const criticalAlerts = alerts.filter((a) => a.type === 'critical');
  const warningAlerts = alerts.filter((a) => a.type === 'warning');
  const infoAlerts = alerts.filter((a) => a.type === 'info');

  return (
    <div className="p-4">
      {/* Critical Alerts */}
      {criticalAlerts.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xs font-bold text-intel-red mb-2">CRITICAL [LEVEL 5]</h3>
          <div className="space-y-2">
            {criticalAlerts.map((alert) => (
              <div
                key={alert.id}
                className="glass-panel p-3 border-l-2 border-intel-red glow-red"
              >
                <p className="text-xs font-bold text-intel-red mb-1">
                  {alert.message}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{alert.location}</span>
                  <span>CONF: {Math.round(alert.confidence * 100)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Warning Alerts */}
      {warningAlerts.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xs font-bold text-yellow-500 mb-2">WARNING [LEVEL 3]</h3>
          <div className="space-y-2">
            {warningAlerts.map((alert) => (
              <div
                key={alert.id}
                className="glass-panel p-3 border-l-2 border-yellow-500"
              >
                <p className="text-xs font-bold text-yellow-500 mb-1">
                  {alert.message}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{alert.location}</span>
                  <span>CONF: {Math.round(alert.confidence * 100)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Info Alerts */}
      {infoAlerts.length > 0 && (
        <div>
          <h3 className="text-xs font-bold text-intel-blue mb-2">INFO [LEVEL 1]</h3>
          <div className="space-y-2">
            {infoAlerts.map((alert) => (
              <div
                key={alert.id}
                className="glass-panel p-3 border-l-2 border-intel-blue"
              >
                <p className="text-xs font-bold text-intel-blue mb-1">
                  {alert.message}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{alert.location}</span>
                  <span>CONF: {Math.round(alert.confidence * 100)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {alerts.length === 0 && (
        <div className="flex items-center justify-center h-32 text-gray-500">
          <p className="text-xs">No active alerts</p>
        </div>
      )}
    </div>
  );
}
