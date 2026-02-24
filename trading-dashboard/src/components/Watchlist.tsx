'use client';

import { Symbol } from '@/types';
import { useMemo } from 'react';

interface WatchlistProps {
  watchlistSymbols: Symbol[];
  selectedSymbol: string;
  onSymbolSelect: (symbol: Symbol) => void;
}

export const Watchlist: React.FC<WatchlistProps> = ({
  watchlistSymbols,
  selectedSymbol,
  onSymbolSelect,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <h3 className="font-semibold text-foreground">My Watchlist</h3>
        <button className="icon-button text-sm" title="Add symbol">
          +
        </button>
      </div>

      <div className="space-y-1 px-2">
        {watchlistSymbols.map((symbol) => (
          <button
            key={symbol.id}
            onClick={() => onSymbolSelect(symbol)}
            className={`w-full p-2 rounded-lg transition-colors text-sm ${
              selectedSymbol === symbol.symbol
                ? 'bg-primary/20 border border-primary'
                : 'hover:bg-secondary/50 border border-transparent'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 text-left">
                <div className="font-semibold text-foreground">{symbol.symbol}</div>
                <div className="text-xs text-muted">{symbol.name}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-foreground">{symbol.price.toFixed(2)}</div>
                <div
                  className={`text-xs font-semibold ${
                    symbol.changePercent >= 0 ? 'price-positive' : 'price-negative'
                  }`}
                >
                  {symbol.changePercent >= 0 ? '+' : ''}{symbol.changePercent.toFixed(2)}%
                </div>
              </div>
            </div>

            {/* Mini Sparkline */}
            {symbol.sparklineData.length > 0 && (
              <div className="mt-1 h-6 w-full">
                <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none">
                  {symbol.sparklineData.map((price, idx, arr) => {
                    const minPrice = Math.min(...arr);
                    const maxPrice = Math.max(...arr);
                    const range = maxPrice - minPrice || 1;
                    const x = (idx / (arr.length - 1)) * 100;
                    const y = 20 - ((price - minPrice) / range) * 20;
                    return (
                      <circle
                        key={idx}
                        cx={x}
                        cy={y}
                        r="1.5"
                        fill={symbol.changePercent >= 0 ? '#10b981' : '#ef4444'}
                      />
                    );
                  })}
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
