'use client';

import { useState } from 'react';
import { Symbol } from '@/types';
import { Watchlist } from './Watchlist';
import { SymbolDetails } from './SymbolDetails';
import { MarketSummary } from './MarketSummary';
import { HotMovers } from './HotMovers';

interface RightSidebarProps {
  watchlistSymbols: Symbol[];
  selectedSymbol: Symbol;
  onSymbolSelect: (symbol: Symbol) => void;
  isCollapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  watchlistSymbols,
  selectedSymbol,
  onSymbolSelect,
  isCollapsed,
  onCollapsedChange,
}) => {
  const [activeTab, setActiveTab] = useState<'watchlist' | 'details' | 'markets' | 'movers'>('watchlist');

  return (
    <aside
      className={`fixed right-0 top-16 bottom-0 glass border-l transition-all duration-300 overflow-hidden ${
        isCollapsed ? 'w-0' : 'w-80'
      }`}
      style={{ top: '64px' }}
    >
      {!isCollapsed && (
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setActiveTab('watchlist')}
                className={`text-xs font-medium pb-2 px-1 border-b-2 transition-colors ${
                  activeTab === 'watchlist'
                    ? 'text-foreground border-blue-500'
                    : 'text-muted border-transparent hover:text-foreground'
                }`}
              >
                Watchlist
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`text-xs font-medium pb-2 px-1 border-b-2 transition-colors ${
                  activeTab === 'details'
                    ? 'text-foreground border-blue-500'
                    : 'text-muted border-transparent hover:text-foreground'
                }`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveTab('markets')}
                className={`text-xs font-medium pb-2 px-1 border-b-2 transition-colors ${
                  activeTab === 'markets'
                    ? 'text-foreground border-blue-500'
                    : 'text-muted border-transparent hover:text-foreground'
                }`}
              >
                Markets
              </button>
              <button
                onClick={() => setActiveTab('movers')}
                className={`text-xs font-medium pb-2 px-1 border-b-2 transition-colors ${
                  activeTab === 'movers'
                    ? 'text-foreground border-blue-500'
                    : 'text-muted border-transparent hover:text-foreground'
                }`}
              >
                Movers
              </button>
            </div>

            <button
              onClick={() => onCollapsedChange(true)}
              className="icon-button"
              title="Collapse"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'watchlist' && (
              <Watchlist
                watchlistSymbols={watchlistSymbols}
                selectedSymbol={selectedSymbol.symbol}
                onSymbolSelect={onSymbolSelect}
              />
            )}
            {activeTab === 'details' && (
              <SymbolDetails symbol={selectedSymbol} />
            )}
            {activeTab === 'markets' && (
              <div className="p-4">
                <MarketSummary />
              </div>
            )}
            {activeTab === 'movers' && (
              <div className="p-4">
                <HotMovers />
              </div>
            )}
          </div>
        </div>
      )}

      {isCollapsed && (
        <button
          onClick={() => onCollapsedChange(false)}
          className="absolute right-0 top-4 -left-10 z-50 icon-button"
          title="Expand"
        >
          ◀
        </button>
      )}
    </aside>
  );
};
