export interface Candlestick {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface Symbol {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap?: number;
  high24h: number;
  low24h: number;
  sparklineData: number[];
}

export interface Watchlist {
  id: string;
  name: string;
  symbols: Symbol[];
}

export interface ToolbarTool {
  id: string;
  name: string;
  icon: string;
  tooltip: string;
}

export interface Timeframe {
  label: string;
  value: '1m' | '5m' | '15m' | '1H' | '4H' | '1D' | '1W';
}

export interface Indicator {
  id: string;
  name: string;
  enabled: boolean;
  dataPoints?: number[];
}

export interface PriceLevel {
  timestamp: number;
  value: number;
}

export interface MACandle {
  timestamp: number;
  moving_average_20: number;
  moving_average_50: number;
}

export interface RSIData {
  timestamp: number;
  rsi: number;
}

export interface DashboardState {
  selectedSymbol: Symbol;
  timeframe: Timeframe;
  isDarkTheme: boolean;
  showIndicators: boolean;
  toolbarCollapsed: boolean;
  rightSidebarCollapsed: boolean;
  bottomPanelCollapsed: boolean;
  activeBottomTab: 'trading' | 'strategy' | 'pine' | 'logs' | 'alerts';
  activeTool: string | null;
}
