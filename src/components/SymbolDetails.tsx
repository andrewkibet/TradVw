'use client';

import { Symbol } from '@/types';

interface SymbolDetailsProps {
  symbol: Symbol;
}

export const SymbolDetails: React.FC<SymbolDetailsProps> = ({ symbol }) => {
  const formatVolume = (volume: number) => {
    if (volume >= 1000000000) return (volume / 1000000000).toFixed(2) + 'B';
    if (volume >= 1000000) return (volume / 1000000).toFixed(2) + 'M';
    if (volume >= 1000) return (volume / 1000).toFixed(2) + 'K';
    return volume.toString();
  };

  const formatMarketCap = (cap: number | undefined) => {
    if (!cap) return 'N/A';
    if (cap >= 1000000000000) return '$' + (cap / 1000000000000).toFixed(2) + 'T';
    if (cap >= 1000000000) return '$' + (cap / 1000000000).toFixed(2) + 'B';
    return '$' + (cap / 1000000).toFixed(2) + 'M';
  };

  return (
    <div className="space-y-3 border-t border-border pt-4 px-4 py-3">
      <h4 className="font-semibold text-foreground text-sm">Symbol Details</h4>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="glass rounded-lg p-2">
          <div className="text-xs text-muted mb-1">Market Status</div>
          <div className="font-semibold text-foreground">
            <span className="inline-block w-2 h-2 rounded-full bg-accent mr-1"></span>
            Open
          </div>
        </div>

        <div className="glass rounded-lg p-2">
          <div className="text-xs text-muted mb-1">Volume</div>
          <div className="font-semibold text-foreground">
            {formatVolume(symbol.volume)}
          </div>
        </div>

        <div className="glass rounded-lg p-2">
          <div className="text-xs text-muted mb-1">24h High</div>
          <div className="font-semibold text-foreground">
            ${symbol.high24h.toFixed(2)}
          </div>
        </div>

        <div className="glass rounded-lg p-2">
          <div className="text-xs text-muted mb-1">24h Low</div>
          <div className="font-semibold text-foreground">
            ${symbol.low24h.toFixed(2)}
          </div>
        </div>
      </div>

      {symbol.marketCap && (
        <div className="glass rounded-lg p-3">
          <div className="text-xs text-muted mb-1">Market Cap</div>
          <div className="font-semibold text-foreground">
            {formatMarketCap(symbol.marketCap)}
          </div>
        </div>
      )}

      <div className="flex gap-2 pt-2">
        <button className="btn-primary flex-1 text-xs">
          📈 Long
        </button>
        <button className="btn-secondary flex-1 text-xs">
          📉 Short
        </button>
      </div>
    </div>
  );
};
