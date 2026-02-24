'use client';

import { useState, useRef, useEffect } from 'react';
import { BOTTOM_PANEL_TABS, BOTTOM_PANEL_DEFAULT_HEIGHT, BOTTOM_PANEL_MIN_HEIGHT } from '@/utils/constants';

interface BottomPanelProps {
  isCollapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
  height: number;
  onHeightChange: (height: number) => void;
}

export const BottomPanel: React.FC<BottomPanelProps> = ({
  isCollapsed,
  onCollapsedChange,
  height,
  onHeightChange,
}) => {
  const [activeTab, setActiveTab] = useState<string>('trading');
  const [isDragging, setIsDragging] = useState(false);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaY = e.clientY;
      const newHeight = window.innerHeight - deltaY - 64; // 64px for top nav

      if (newHeight >= BOTTOM_PANEL_MIN_HEIGHT) {
        onHeightChange(newHeight);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, onHeightChange]);

  const renderTabContent = (tabId: string) => {
    switch (tabId) {
      case 'trading':
        return (
          <div className="space-y-3">
            <div className="text-sm text-muted mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2"></span>
              Market Status: Open
            </div>
            <div className="grid grid-cols-4 gap-2 text-xs">
              <div className="glass rounded p-2">
                <div className="text-muted mb-1">Position Size</div>
                <input type="text" placeholder="0" className="w-full bg-secondary/30 border border-border rounded px-2 py-1 text-foreground text-xs" />
              </div>
              <div className="glass rounded p-2">
                <div className="text-muted mb-1">Take Profit</div>
                <input type="text" placeholder="0" className="w-full bg-secondary/30 border border-border rounded px-2 py-1 text-foreground text-xs" />
              </div>
              <div className="glass rounded p-2">
                <div className="text-muted mb-1">Stop Loss</div>
                <input type="text" placeholder="0" className="w-full bg-secondary/30 border border-border rounded px-2 py-1 text-foreground text-xs" />
              </div>
              <div className="glass rounded p-2">
                <div className="text-muted mb-1">Leverage</div>
                <select className="w-full bg-secondary/30 border border-border rounded px-2 py-1 text-foreground text-xs">
                  <option>1x</option>
                  <option>5x</option>
                  <option>10x</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 btn-primary text-sm">📈 Buy</button>
              <button className="flex-1 btn-secondary text-sm">📉 Sell</button>
              <button className="flex-1 btn-secondary text-sm">❌ Close</button>
            </div>
          </div>
        );
      case 'strategy':
        return (
          <div className="space-y-2 text-sm">
            <div className="text-muted">Strategy Tester</div>
            <div className="glass rounded p-3 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-muted">Total Trades:</span>
                <span className="text-foreground font-semibold">127</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Win Rate:</span>
                <span className="price-positive font-semibold">62.3%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Total Return:</span>
                <span className="price-positive font-semibold">+24.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Max Drawdown:</span>
                <span className="price-negative font-semibold">-8.2%</span>
              </div>
            </div>
            <button className="btn-primary w-full text-sm">Run Backtest</button>
          </div>
        );
      case 'pine':
        return (
          <div className="space-y-2">
            <div className="flex gap-2 mb-2">
              <button className="btn-secondary text-xs">New Script</button>
              <button className="btn-secondary text-xs">Load Script</button>
            </div>
            <textarea
              placeholder="// Write your Pine Script here..."
              className="w-full h-32 px-3 py-2 bg-secondary/30 border border-border rounded text-foreground font-mono text-xs resize-none focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        );
      case 'logs':
        return (
          <div className="space-y-1 text-xs font-mono">
            <div className="text-muted">[2025-02-22 14:30:45] Chart loaded</div>
            <div className="text-muted">[2025-02-22 14:30:46] Indicator RSI(14) calculated</div>
            <div className="text-muted">[2025-02-22 14:30:47] Market data updated</div>
            <div className="text-accent">[2025-02-22 14:30:48] ✓ Ready for trading</div>
          </div>
        );
      case 'alerts':
        return (
          <div className="space-y-2 text-sm">
            <div className="glass rounded p-2">
              <div className="font-semibold text-foreground mb-1">Price Alert: BTCUSD</div>
              <div className="text-xs text-muted">When price crosses $45,500 - Active</div>
            </div>
            <div className="glass rounded p-2">
              <div className="font-semibold text-foreground mb-1">Volume Alert</div>
              <div className="text-xs text-muted">Volume exceeds 20M - Disabled</div>
            </div>
            <button className="btn-primary w-full text-sm">+ Create Alert</button>
          </div>
        );
      default:
        return null;
    }
  };

  if (isCollapsed) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-secondary/50 border-t border-border px-4 py-2 z-30">
        <button
          onClick={() => onCollapsedChange(false)}
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Terminal • Logs • Alerts (Collapsed)
        </button>
      </div>
    );
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 glass border-t border-border z-30 flex flex-col"
      style={{ height: `${height}px` }}
    >
      {/* Resize Handle */}
      <div
        ref={dividerRef}
        onMouseDown={() => setIsDragging(true)}
        className="h-1 bg-primary/50 hover:bg-primary cursor-ns-resize transition-colors"
        title="Drag to resize"
      />

      {/* Tab Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/50">
        <div className="flex gap-1">
          {BOTTOM_PANEL_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-t-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-secondary text-foreground'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => onCollapsedChange(true)}
          className="icon-button"
          title="Collapse"
        >
          ▼
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        {renderTabContent(activeTab)}
      </div>
    </div>
  );
};
