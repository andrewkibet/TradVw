'use client';

import { useMemo } from 'react';
import { Candlestick, RSIData } from '@/types';
import { generateMockChartData } from '@/utils/mockData';

interface ChartAreaProps {
  symbol: string;
  chartData: { candles: Candlestick[]; rsi: RSIData[] };
  showIndicators: boolean;
  fullscreen: boolean;
  onFullscreenToggle: () => void;
}

export const ChartArea: React.FC<ChartAreaProps> = ({
  symbol,
  chartData,
  showIndicators,
  fullscreen,
  onFullscreenToggle,
}) => {
  // Get current price from latest candle
  const currentPrice = chartData.candles[chartData.candles.length - 1]?.close || 0;
  const previousPrice = chartData.candles[chartData.candles.length - 2]?.close || currentPrice;
  const priceChange = currentPrice - previousPrice;
  const priceChangePercent = (priceChange / previousPrice) * 100;

  // Get OHLC info from latest candle
  const latestCandle = chartData.candles[chartData.candles.length - 1] || {};

  const simpleCandleChart = useMemo(() => {
    if (chartData.candles.length === 0) return null;

    const maxPrice = Math.max(...chartData.candles.map(c => c.high));
    const minPrice = Math.min(...chartData.candles.map(c => c.low));
    const priceRange = maxPrice - minPrice;

    return {
      maxPrice,
      minPrice,
      priceRange,
      candles: chartData.candles.slice(-50), // Show last 50 candles
    };
  }, [chartData.candles]);

  if (!simpleCandleChart) {
    return <div className="flex-1 bg-secondary/50 animate-pulse">Loading chart...</div>;
  }

  return (
    <div className={`flex flex-col ${fullscreen ? 'fixed inset-0 z-50 pt-16' : 'flex-1'} bg-background`}>
      {/* Chart Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-foreground">{symbol}</h2>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">
              {currentPrice.toFixed(2)}
            </span>
            <span
              className={`text-sm font-semibold ${
                priceChange >= 0 ? 'price-positive' : 'price-negative'
              }`}
            >
              {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)} ({priceChangePercent.toFixed(2)}%)
            </span>
          </div>
        </div>

        <button
          onClick={onFullscreenToggle}
          className="icon-button"
          title="Fullscreen (F)"
        >
          {fullscreen ? '⛶' : '⛶'}
        </button>
      </div>

      {/* Main Chart Area */}
      <div className="flex-1 relative overflow-hidden chart-grid">
        {/* Floating OHLC Box */}
        <div className="absolute top-12 left-4 glass rounded-lg p-3 text-xs spacing-y-1 z-10">
          <div className="text-muted">O: {latestCandle.open?.toFixed(2)}</div>
          <div className="text-accent font-semibold">H: {latestCandle.high?.toFixed(2)}</div>
          <div className="text-decline font-semibold">L: {latestCandle.low?.toFixed(2)}</div>
          <div className="text-foreground font-semibold">C: {latestCandle.close?.toFixed(2)}</div>
        </div>

        {/* Simple Candlestick Visualization */}
        <svg
          viewBox={`0 0 ${simpleCandleChart.candles.length * 20} 400`}
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Price Grid Lines */}
          {Array.from({ length: 5 }).map((_, i) => {
            const price = simpleCandleChart.minPrice + (i * simpleCandleChart.priceRange) / 4;
            const y = 400 - (i * 400) / 4;
            return (
              <g key={`gridline-${i}`}>
                <line
                  x1="0"
                  y1={y}
                  x2={simpleCandleChart.candles.length * 20}
                  y2={y}
                  stroke="rgba(71, 85, 105, 0.1)"
                  strokeWidth="1"
                />
                <text
                  x={simpleCandleChart.candles.length * 20 - 40}
                  y={y - 5}
                  fill="#94a3b8"
                  fontSize="12"
                >
                  {price.toFixed(0)}
                </text>
              </g>
            );
          })}

          {/* Candlesticks */}
          {simpleCandleChart.candles.map((candle, idx) => {
            const candleX = idx * 20 + 10;
            const wickHigh = 400 - ((candle.high - simpleCandleChart.minPrice) / simpleCandleChart.priceRange) * 400;
            const wickLow = 400 - ((candle.low - simpleCandleChart.minPrice) / simpleCandleChart.priceRange) * 400;
            const openY = 400 - ((candle.open - simpleCandleChart.minPrice) / simpleCandleChart.priceRange) * 400;
            const closeY = 400 - ((candle.close - simpleCandleChart.minPrice) / simpleCandleChart.priceRange) * 400;

            const isGreen = candle.close >= candle.open;
            const candleColor = isGreen ? '#10b981' : '#ef4444';
            const bodyTop = Math.min(openY, closeY);
            const bodyHeight = Math.abs(closeY - openY) || 1;

            return (
              <g key={`candle-${idx}`}>
                {/* Wick */}
                <line
                  x1={candleX}
                  y1={wickHigh}
                  x2={candleX}
                  y2={wickLow}
                  stroke={candleColor}
                  strokeWidth="1"
                />
                {/* Body */}
                <rect
                  x={candleX - 6}
                  y={bodyTop}
                  width="12"
                  height={bodyHeight}
                  fill={candleColor}
                  opacity="0.8"
                />
              </g>
            );
          })}

          {/* Crosshair */}
          <defs>
            <pattern
              id="crosshair"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            />
          </defs>
        </svg>

        {/* Price Scale on Right */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-secondary/30 to-transparent border-l border-border text-xs text-muted flex flex-col justify-between px-2 py-4">
          <div>{simpleCandleChart.maxPrice.toFixed(0)}</div>
          <div>{((simpleCandleChart.maxPrice + simpleCandleChart.minPrice) / 2).toFixed(0)}</div>
          <div>{simpleCandleChart.minPrice.toFixed(0)}</div>
        </div>

        {/* Time Scale at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-secondary/30 to-transparent border-t border-border flex items-center px-4 text-xs text-muted gap-4">
          {['1d ago', '6h ago', '3h ago', 'Now'].map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>

      {/* Indicators Panel */}
      {showIndicators && (
        <div className="h-32 border-t border-border bg-secondary/30 p-4">
          <div className="text-sm font-semibold text-foreground mb-2">RSI (14)</div>
          <div className="w-full h-full relative">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
              {chartData.rsi.slice(-50).map((rsi, idx) => {
                const x = (idx / 49) * 100;
                const y = 100 - rsi.rsi;
                return (
                  <circle
                    key={`rsi-${idx}`}
                    cx={x}
                    cy={y}
                    r="1"
                    fill="#3b82f6"
                  />
                );
              })}
              {/* Mid-level line */}
              <line x1="0" y1="50" x2="100" y2="50" stroke="#475569" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
