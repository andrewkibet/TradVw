'use client';

interface HotMover {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
}

const hotMovers: HotMover[] = [
  { symbol: 'NVDA', name: 'NVIDIA', price: 142.35, change: 8.42, changePercent: 6.3, volume: '145.2M' },
  { symbol: 'TSLA', name: 'Tesla', price: 242.56, change: -8.23, changePercent: -3.28, volume: '145.2M' },
  { symbol: 'AAPL', name: 'Apple', price: 195.45, change: 8.23, changePercent: 4.39, volume: '52.3M' },
  { symbol: 'MSFT', name: 'Microsoft', price: 417.23, change: 12.34, changePercent: 3.05, volume: '18.3M' },
  { symbol: 'AMZN', name: 'Amazon', price: 198.76, change: -5.45, changePercent: -2.67, volume: '68.9M' },
  { symbol: 'GOOGL', name: 'Alphabet', price: 156.78, change: -3.45, changePercent: -2.15, volume: '28.3M' },
];

export const HotMovers: React.FC = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between px-4 py-2">
        <h3 className="text-xs font-semibold text-slate-100 uppercase tracking-wider">Hot Movers</h3>
      </div>

      <div className="space-y-1 px-4">
        {hotMovers.map((mover) => (
          <div
            key={mover.symbol}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-700/30 transition-colors text-sm cursor-pointer"
          >
            <div className="flex-1">
              <div className="font-semibold text-slate-100">{mover.symbol}</div>
              <div className="text-xs text-slate-400">{mover.volume} volume</div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-slate-100">${mover.price.toFixed(2)}</div>
              <div
                className={`text-xs font-semibold ${
                  mover.changePercent >= 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {mover.changePercent >= 0 ? '▲' : '▼'} {Math.abs(mover.changePercent).toFixed(2)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
