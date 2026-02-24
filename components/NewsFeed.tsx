'use client';

import { NewsArticle } from '@/types';

interface NewsFeedProps {
  articles: NewsArticle[];
}

export default function NewsFeed({ articles }: NewsFeedProps) {
  return (
    <div className="p-4 space-y-3">
      {articles.map((article) => (
        <div
          key={article.id}
          className="glass-panel p-3 hover:border-intel-blue/30 transition-colors cursor-pointer"
        >
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xs font-bold text-intel-blue flex-1 line-clamp-2">
              {article.title}
            </h3>
            <span
              className={`text-xs px-2 py-1 rounded ml-2 flex-shrink-0 ${
                article.sentiment === 'positive'
                  ? 'bg-intel-green/20 text-intel-green'
                  : article.sentiment === 'negative'
                    ? 'bg-intel-red/20 text-intel-red'
                    : 'bg-gray-500/20 text-gray-400'
              }`}
            >
              {article.sentiment.toUpperCase()}
            </span>
          </div>

          <p className="text-xs text-gray-400 line-clamp-2 mb-2">
            {article.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">{article.source}</span>
            <span className="text-xs text-gray-600">
              {formatTime(article.timestamp)}
            </span>
          </div>
        </div>
      ))}

      {articles.length === 0 && (
        <div className="flex items-center justify-center h-32 text-gray-500">
          <p className="text-xs">No articles available</p>
        </div>
      )}
    </div>
  );
}

function formatTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}
