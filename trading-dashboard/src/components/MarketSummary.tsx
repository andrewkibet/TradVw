'use client';

interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

const marketData: MarketData[] = [
  { symbol: 'SPX', name: 'S&P 500', price: 6909.52, change: 47.5, changePercent: 0.69 },
  { symbol: 'NDX', name: 'Nasdaq 100', price: 25012.62, change: 216.5, changePercent: 0.87 },
  { symbol: 'BTCUSD', name: 'Bitcoin', price: 67910.0, change: -54.0, changePercent: -0.08 },
  { symbol: 'ETHUSD', name: 'Ethereum', price: 1964.5, change: -9.0, changePercent: -0.46 },
  { symbol: 'EURUSD', name: 'EUR/USD', price: 1.1795, change: 0.0006, changePercent: 0.05 },
  { symbol: 'XAUUSD', name: 'Gold', price: 5080.9, change: 84.9, changePercent: 1.67 },
];

export const MarketSummary: React.FC = () => {
  return (
    <div className="px-4 py-3 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold text-slate-100 uppercase tracking-wider">Market Summary</h3>
        <button className="text-xs text-blue-400 hover:text-blue-300">See All</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {marketData.map((market) => (
          <div
            key={market.symbol}
            className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-2 hover:bg-slate-700/50 transition-colors cursor-pointer"
          >
            <div className="text-xs text-slate-400 mb-1">{market.symbol}</div>
            <div className="text-sm font-semibold text-slate-100 mb-1">
              {market.symbol.includes('USD') || market.symbol.includes('JPY')
                ? market.price.toFixed(2)
                : market.price.toLocaleString()}
            </div>
            <div
              className={`text-xs font-semibold ${
                market.changePercent >= 0 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {market.changePercent >= 0 ? '+' : ''}{market.changePercent.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
