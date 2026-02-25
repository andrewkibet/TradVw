'use client';

import { useState } from 'react';
import { Timeframe } from '@/types';
import { timeframes } from '@/utils/mockData';
import { TOP_NAV_HEIGHT } from '@/utils/constants';

interface TopNavProps {
  selectedSymbol: string;
  selectedTimeframe: Timeframe;
  onTimeframeChange: (timeframe: Timeframe) => void;
  onSearchChange: (symbol: string) => void;
  isDarkTheme: boolean;
  onThemeToggle: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  selectedSymbol,
  selectedTimeframe,
  onTimeframeChange,
  onSearchChange,
  isDarkTheme,
  onThemeToggle,
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setSearchValue(value);
    onSearchChange(value);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 glass border-b"
      style={{ height: `${TOP_NAV_HEIGHT}px` }}
    >
      <div className="h-full px-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 min-w-fit">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
            T
          </div>
          <span className="text-lg font-bold text-foreground hidden sm:inline">
            Pro Trading
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search symbol (BTCUSD, AAPL, etc.)"
              value={searchValue}
              onChange={handleSearch}
              className="w-full px-3 py-2 rounded-lg bg-secondary/50 border border-border text-foreground placeholder-muted text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <span className="absolute right-3 top-2.5 text-muted text-sm">
              🔍
            </span>
          </div>
        </div>

        {/* Timeframe Selector */}
        <div className="flex gap-1">
          {timeframes.map((tf) => (
            <button
              key={tf.value}
              onClick={() => onTimeframeChange(tf)}
              className={`px-2 py-1 rounded-md text-xs font-medium transition-colors ${
                selectedTimeframe?.value === tf.value
                  ? 'bg-primary text-white'
                  : 'text-muted hover:bg-secondary/50 hover:text-foreground'
              }`}
            >
              {tf.label}
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-2">
          {/* Indicators Button */}
          <button title="Indicators" className="icon-button">
            📊
          </button>

          {/* Compare Button */}
          <button title="Compare" className="icon-button">
            ⚖️
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-border"></div>

          {/* Undo/Redo */}
          <button title="Undo (Ctrl+Z)" className="icon-button">
            ↶
          </button>
          <button title="Redo (Ctrl+Y)" className="icon-button">
            ↷
          </button>

          {/* Layout Selector */}
          <button title="Layout" className="icon-button">
            ⊞
          </button>

          {/* Save Chart */}
          <button title="Save Chart (Ctrl+S)" className="icon-button">
            💾
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-border"></div>

          {/* Notifications */}
          <button title="Notifications" className="icon-button">
            🔔
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onThemeToggle}
            title={isDarkTheme ? 'Light Mode' : 'Dark Mode'}
            className="icon-button"
          >
            {isDarkTheme ? '☀️' : '🌙'}
          </button>

          {/* User Profile */}
          <button title="Profile" className="icon-button">
            👤
          </button>
        </div>
      </div>
    </nav>
  );
};
