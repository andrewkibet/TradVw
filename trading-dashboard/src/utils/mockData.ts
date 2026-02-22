import { Candlestick, Symbol, Watchlist, ToolbarTool, RSIData } from '@/types';

// Generate mock candlestick data
export const generateMockCandleData = (): Candlestick[] => {
  const data: Candlestick[] = [];
  let basePrice = 45000;
  const now = Date.now();

  for (let i = 100; i >= 0; i--) {
    const timestamp = now - i * 60 * 60 * 1000; // 1 hour intervals
    const volatility = (Math.random() - 0.5) * 1000;
    const open = basePrice + volatility;
    const close = open + (Math.random() - 0.5) * 800;
    const high = Math.max(open, close) + Math.random() * 500;
    const low = Math.min(open, close) - Math.random() * 500;
    const volume = Math.floor(Math.random() * 10000000) + 5000000;

    data.push({
      timestamp,
      open: Math.round(open * 100) / 100,
      high: Math.round(high * 100) / 100,
      low: Math.round(low * 100) / 100,
      close: Math.round(close * 100) / 100,
      volume,
    });

    basePrice = close;
  }

  return data;
};

// Generate RSI indicator data
export const generateMockRSIData = (candles: Candlestick[]): RSIData[] => {
  const rsiData: RSIData[] = [];
  const period = 14;

  for (let i = 0; i < candles.length; i++) {
    if (i < period - 1) {
      rsiData.push({
        timestamp: candles[i].timestamp,
        rsi: 50,
      });
      continue;
    }

    let gains = 0;
    let losses = 0;

    for (let j = i - period + 1; j <= i; j++) {
      if (j <= 0) continue;
      const change = candles[j].close - candles[j - 1].close;
      if (change > 0) gains += change;
      else losses += Math.abs(change);
    }

    const avgGain = gains / period;
    const avgLoss = losses / period;
    const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
    const rsi = 100 - 100 / (1 + rs);

    rsiData.push({
      timestamp: candles[i].timestamp,
      rsi: Math.round(rsi * 100) / 100,
    });
  }

  return rsiData;
};

// Generate sparkline data
export const generateSparklineData = (count: number = 30): number[] => {
  const data: number[] = [];
  let basePrice = Math.random() * 50 + 45000;

  for (let i = 0; i < count; i++) {
    const change = (Math.random() - 0.5) * 500;
    basePrice += change;
    data.push(Math.round(basePrice * 100) / 100);
  }

  return data;
};

// Mock symbols data
export const mockSymbols: Symbol[] = [
  {
    id: '1',
    symbol: 'BTCUSD',
    name: 'Bitcoin',
    price: 45234.50,
    change: 2345.50,
    changePercent: 5.43,
    volume: 28234567890,
    marketCap: 890234567890,
    high24h: 46123.50,
    low24h: 43456.00,
    sparklineData: generateSparklineData(),
  },
  {
    id: '2',
    symbol: 'ETHUSD',
    name: 'Ethereum',
    price: 2345.67,
    change: 123.45,
    changePercent: 5.56,
    volume: 15345678901,
    marketCap: 281234567890,
    high24h: 2456.78,
    low24h: 2145.32,
    sparklineData: generateSparklineData(),
  },
  {
    id: '3',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 195.45,
    change: 8.23,
    changePercent: 4.39,
    volume: 52345678,
    marketCap: 3045678901234,
    high24h: 196.78,
    low24h: 187.12,
    sparklineData: generateSparklineData(),
  },
  {
    id: '4',
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 156.78,
    change: -3.45,
    changePercent: -2.15,
    volume: 28345678,
    marketCap: 2034567890123,
    high24h: 160.23,
    low24h: 154.56,
    sparklineData: generateSparklineData(),
  },
  {
    id: '5',
    symbol: 'MSFT',
    name: 'Microsoft',
    price: 417.23,
    change: 12.34,
    changePercent: 3.05,
    volume: 18345678,
    marketCap: 3104567890123,
    high24h: 418.90,
    low24h: 404.67,
    sparklineData: generateSparklineData(),
  },
  {
    id: '6',
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: 242.56,
    change: -8.23,
    changePercent: -3.28,
    volume: 145234567,
    marketCap: 764567890123,
    high24h: 251.23,
    low24h: 241.12,
    sparklineData: generateSparklineData(),
  },
];

// Default watchlist
export const defaultWatchlist: Watchlist = {
  id: '1',
  name: 'My Watchlist',
  symbols: mockSymbols.slice(0, 4),
};

// Toolbar tools
export const toolbarTools: ToolbarTool[] = [
  {
    id: 'cursor',
    name: 'Cursor',
    icon: '↖️',
    tooltip: 'Cursor Tool (V)',
  },
  {
    id: 'trendline',
    name: 'Trend Line',
    icon: '📈',
    tooltip: 'Trend Line (L)',
  },
  {
    id: 'brush',
    name: 'Brush',
    icon: '🖌️',
    tooltip: 'Brush (B)',
  },
  {
    id: 'text',
    name: 'Text',
    icon: '📝',
    tooltip: 'Text Tool (T)',
  },
  {
    id: 'fibonacci',
    name: 'Fibonacci',
    icon: '🔢',
    tooltip: 'Fibonacci (F)',
  },
  {
    id: 'rectangle',
    name: 'Rectangle',
    icon: '◻️',
    tooltip: 'Rectangle (R)',
  },
  {
    id: 'position',
    name: 'Position',
    icon: '↕️',
    tooltip: 'Long/Short Position',
  },
  {
    id: 'measure',
    name: 'Measure',
    icon: '📏',
    tooltip: 'Measure Tool (M)',
  },
  {
    id: 'zoom',
    name: 'Zoom',
    icon: '🔍',
    tooltip: 'Zoom Tool (Z)',
  },
];

// Timeframes
export const timeframes = [
  { label: '1m', value: '1m' as const },
  { label: '5m', value: '5m' as const },
  { label: '15m', value: '15m' as const },
  { label: '1H', value: '1H' as const },
  { label: '4H', value: '4H' as const },
  { label: '1D', value: '1D' as const },
  { label: '1W', value: '1W' as const },
];

// Generate full mock data
export const generateMockChartData = () => {
  const candles = generateMockCandleData();
  const rsi = generateMockRSIData(candles);

  return {
    candles,
    rsi,
  };
};
