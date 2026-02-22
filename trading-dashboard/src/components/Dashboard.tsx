'use client';

import { useState, useEffect } from 'react';
import { TopNav, LeftToolbar, ChartArea, RightSidebar, BottomPanel } from '@/components';
import { generateMockChartData, mockSymbols, defaultWatchlist } from '@/utils/mockData';
import { DashboardState, Symbol, Timeframe } from '@/types';
import { BOTTOM_PANEL_DEFAULT_HEIGHT, TOP_NAV_HEIGHT } from '@/utils/constants';

export const Dashboard: React.FC = () => {
  const [state, setState] = useState<DashboardState>({
    selectedSymbol: mockSymbols[0],
    timeframe: { label: '1H', value: '1H' },
    isDarkTheme: true,
    showIndicators: false,
    toolbarCollapsed: true,
    rightSidebarCollapsed: false,
    bottomPanelCollapsed: false,
    activeBottomTab: 'trading',
    activeTool: null,
  });

  const [chartData, setChartData] = useState(generateMockChartData());
  const [fullscreen, setFullscreen] = useState(false);
  const [bottomPanelHeight, setBottomPanelHeight] = useState(BOTTOM_PANEL_DEFAULT_HEIGHT);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'f' || e.key === 'F') {
        setFullscreen(!fullscreen);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        // Save chart logic
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        // Undo logic
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.shiftKey && e.key === 'z'))) {
        e.preventDefault();
        // Redo logic
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreen]);

  const handleSymbolSelect = (symbol: Symbol) => {
    setState((prev) => ({
      ...prev,
      selectedSymbol: symbol,
    }));
    setChartData(generateMockChartData());
  };

  const handleTimeframeChange = (timeframe: Timeframe) => {
    setState((prev) => ({
      ...prev,
      timeframe,
    }));
    setChartData(generateMockChartData());
  };

  const handleSearchChange = (symbol: string) => {
    const found = mockSymbols.find((s) => s.symbol === symbol);
    if (found) {
      handleSymbolSelect(found);
    }
  };

  const handleToolChange = (toolId: string) => {
    setState((prev) => ({
      ...prev,
      activeTool: prev.activeTool === toolId ? null : toolId,
    }));
  };

  const handleThemeToggle = () => {
    setState((prev) => ({
      ...prev,
      isDarkTheme: !prev.isDarkTheme,
    }));
  };

  const handleToggleIndicators = () => {
    setState((prev) => ({
      ...prev,
      showIndicators: !prev.showIndicators,
    }));
  };

  const mainMarginLeft = state.toolbarCollapsed ? '48px' : '200px';
  const mainMarginRight = state.rightSidebarCollapsed ? '0' : '320px';
  const mainMarginBottom = state.bottomPanelCollapsed ? '0' : `${bottomPanelHeight}px`;

  return (
    <div className={`min-h-screen ${state.isDarkTheme ? 'dark' : 'light'}`}>
      {/* Top Navigation */}
      <TopNav
        selectedSymbol={state.selectedSymbol.symbol}
        selectedTimeframe={state.timeframe}
        onTimeframeChange={handleTimeframeChange}
        onSearchChange={handleSearchChange}
        isDarkTheme={state.isDarkTheme}
        onThemeToggle={handleThemeToggle}
      />

      {/* Main Content Area */}
      <div
        className="fixed top-16 left-0 right-0 bottom-0 flex"
        style={{ top: `${TOP_NAV_HEIGHT}px` }}
      >
        {/* Left Toolbar */}
        <LeftToolbar
          activeTool={state.activeTool}
          onToolChange={handleToolChange}
        />

        {/* Center Chart Area */}
        <div
          className="flex-1 flex flex-col"
          style={{
            marginLeft: mainMarginLeft,
            marginRight: mainMarginRight,
            marginBottom: mainMarginBottom,
          }}
        >
          <ChartArea
            symbol={state.selectedSymbol.symbol}
            chartData={chartData}
            showIndicators={state.showIndicators}
            fullscreen={fullscreen}
            onFullscreenToggle={() => setFullscreen(!fullscreen)}
          />
        </div>

        {/* Right Sidebar */}
        <RightSidebar
          watchlistSymbols={defaultWatchlist.symbols}
          selectedSymbol={state.selectedSymbol}
          onSymbolSelect={handleSymbolSelect}
          isCollapsed={state.rightSidebarCollapsed}
          onCollapsedChange={(collapsed) =>
            setState((prev) => ({
              ...prev,
              rightSidebarCollapsed: collapsed,
            }))
          }
        />
      </div>

      {/* Bottom Panel */}
      <BottomPanel
        isCollapsed={state.bottomPanelCollapsed}
        onCollapsedChange={(collapsed) =>
          setState((prev) => ({
            ...prev,
            bottomPanelCollapsed: collapsed,
          }))
        }
        height={bottomPanelHeight}
        onHeightChange={setBottomPanelHeight}
      />

      {/* Keyboard Shortcuts Help (hidden by default, shown on ? key) */}
      {/* Could be implemented as a modal */}
    </div>
  );
};
