(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/Trad2/trading-dashboard/src/utils/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultWatchlist",
    ()=>defaultWatchlist,
    "generateMockCandleData",
    ()=>generateMockCandleData,
    "generateMockChartData",
    ()=>generateMockChartData,
    "generateMockRSIData",
    ()=>generateMockRSIData,
    "generateSparklineData",
    ()=>generateSparklineData,
    "mockSymbols",
    ()=>mockSymbols,
    "timeframes",
    ()=>timeframes,
    "toolbarTools",
    ()=>toolbarTools
]);
const generateMockCandleData = ()=>{
    const data = [];
    let basePrice = 45000;
    const now = Date.now();
    for(let i = 100; i >= 0; i--){
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
            volume
        });
        basePrice = close;
    }
    return data;
};
const generateMockRSIData = (candles)=>{
    const rsiData = [];
    const period = 14;
    for(let i = 0; i < candles.length; i++){
        if (i < period - 1) {
            rsiData.push({
                timestamp: candles[i].timestamp,
                rsi: 50
            });
            continue;
        }
        let gains = 0;
        let losses = 0;
        for(let j = i - period + 1; j <= i; j++){
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
            rsi: Math.round(rsi * 100) / 100
        });
    }
    return rsiData;
};
const generateSparklineData = (count = 30)=>{
    const data = [];
    let basePrice = Math.random() * 50 + 45000;
    for(let i = 0; i < count; i++){
        const change = (Math.random() - 0.5) * 500;
        basePrice += change;
        data.push(Math.round(basePrice * 100) / 100);
    }
    return data;
};
const mockSymbols = [
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
        sparklineData: generateSparklineData()
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
        sparklineData: generateSparklineData()
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
        sparklineData: generateSparklineData()
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
        sparklineData: generateSparklineData()
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
        sparklineData: generateSparklineData()
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
        sparklineData: generateSparklineData()
    }
];
const defaultWatchlist = {
    id: '1',
    name: 'My Watchlist',
    symbols: mockSymbols.slice(0, 4)
};
const toolbarTools = [
    {
        id: 'cursor',
        name: 'Cursor',
        icon: '↖️',
        tooltip: 'Cursor Tool (V)'
    },
    {
        id: 'trendline',
        name: 'Trend Line',
        icon: '📈',
        tooltip: 'Trend Line (L)'
    },
    {
        id: 'brush',
        name: 'Brush',
        icon: '🖌️',
        tooltip: 'Brush (B)'
    },
    {
        id: 'text',
        name: 'Text',
        icon: '📝',
        tooltip: 'Text Tool (T)'
    },
    {
        id: 'fibonacci',
        name: 'Fibonacci',
        icon: '🔢',
        tooltip: 'Fibonacci (F)'
    },
    {
        id: 'rectangle',
        name: 'Rectangle',
        icon: '◻️',
        tooltip: 'Rectangle (R)'
    },
    {
        id: 'position',
        name: 'Position',
        icon: '↕️',
        tooltip: 'Long/Short Position'
    },
    {
        id: 'measure',
        name: 'Measure',
        icon: '📏',
        tooltip: 'Measure Tool (M)'
    },
    {
        id: 'zoom',
        name: 'Zoom',
        icon: '🔍',
        tooltip: 'Zoom Tool (Z)'
    }
];
const timeframes = [
    {
        label: '1m',
        value: '1m'
    },
    {
        label: '5m',
        value: '5m'
    },
    {
        label: '15m',
        value: '15m'
    },
    {
        label: '1H',
        value: '1H'
    },
    {
        label: '4H',
        value: '4H'
    },
    {
        label: '1D',
        value: '1D'
    },
    {
        label: '1W',
        value: '1W'
    }
];
const generateMockChartData = ()=>{
    const candles = generateMockCandleData();
    const rsi = generateMockRSIData(candles);
    return {
        candles,
        rsi
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/Trad2/trading-dashboard/src/utils/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BOTTOM_PANEL_DEFAULT_HEIGHT",
    ()=>BOTTOM_PANEL_DEFAULT_HEIGHT,
    "BOTTOM_PANEL_MIN_HEIGHT",
    ()=>BOTTOM_PANEL_MIN_HEIGHT,
    "BOTTOM_PANEL_TABS",
    ()=>BOTTOM_PANEL_TABS,
    "CHART_MIN_HEIGHT",
    ()=>CHART_MIN_HEIGHT,
    "GRID_SIZE",
    ()=>GRID_SIZE,
    "SHORTCUTS",
    ()=>SHORTCUTS,
    "SIDEBAR_WIDTH",
    ()=>SIDEBAR_WIDTH,
    "STATUS",
    ()=>STATUS,
    "TOOLBAR_EXPANDED_WIDTH",
    ()=>TOOLBAR_EXPANDED_WIDTH,
    "TOOLBAR_WIDTH",
    ()=>TOOLBAR_WIDTH,
    "TOP_NAV_HEIGHT",
    ()=>TOP_NAV_HEIGHT
]);
const SHORTCUTS = {
    CURSOR: 'V',
    TRENDLINE: 'L',
    BRUSH: 'B',
    TEXT: 'T',
    FIBONACCI: 'F',
    RECTANGLE: 'R',
    MEASURE: 'M',
    ZOOM: 'Z',
    UNDO: 'Ctrl+Z',
    REDO: 'Ctrl+Y',
    SAVE: 'Ctrl+S',
    FULLSCREEN: 'F'
};
const STATUS = {
    MARKET_OPEN: 'Open',
    MARKET_CLOSED: 'Closed',
    MARKET_PREMARKET: 'Pre-Market',
    MARKET_AFTERHOURS: 'After Hours'
};
const BOTTOM_PANEL_TABS = [
    {
        id: 'trading',
        label: 'Trading'
    },
    {
        id: 'strategy',
        label: 'Strategy Tester'
    },
    {
        id: 'pine',
        label: 'Pine Editor'
    },
    {
        id: 'logs',
        label: 'Logs'
    },
    {
        id: 'alerts',
        label: 'Alerts'
    }
];
const CHART_MIN_HEIGHT = 300;
const BOTTOM_PANEL_MIN_HEIGHT = 150;
const BOTTOM_PANEL_DEFAULT_HEIGHT = 250;
const TOOLBAR_WIDTH = 48;
const TOOLBAR_EXPANDED_WIDTH = 200;
const SIDEBAR_WIDTH = 350;
const TOP_NAV_HEIGHT = 64;
const GRID_SIZE = 40;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopNav",
    ()=>TopNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/utils/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/utils/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const TopNav = ({ selectedSymbol, selectedTimeframe, onTimeframeChange, onSearchChange, isDarkTheme, onThemeToggle })=>{
    _s();
    const [searchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSearch = (e)=>{
        const value = e.target.value.toUpperCase();
        setSearchValue(value);
        onSearchChange(value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-40 glass border-b",
        style: {
            height: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOP_NAV_HEIGHT"]}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full px-4 flex items-center justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 min-w-fit",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold",
                            children: "T"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-bold text-foreground hidden sm:inline",
                            children: "Pro Trading"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 max-w-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search symbol (BTCUSD, AAPL, etc.)",
                                value: searchValue,
                                onChange: handleSearch,
                                className: "w-full px-3 py-2 rounded-lg bg-secondary/50 border border-border text-foreground placeholder-muted text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute right-3 top-2.5 text-muted text-sm",
                                children: "🔍"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeframes"].map((tf)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onTimeframeChange(tf),
                            className: `px-2 py-1 rounded-md text-xs font-medium transition-colors ${selectedTimeframe?.value === tf.value ? 'bg-primary text-white' : 'text-muted hover:bg-secondary/50 hover:text-foreground'}`,
                            children: tf.label
                        }, tf.value, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            title: "Indicators",
                            className: "icon-button",
                            children: "📊"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            title: "Compare",
                            className: "icon-button",
                            children: "⚖️"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px h-6 bg-border"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            title: "Undo (Ctrl+Z)",
                            className: "icon-button",
                            children: "↶"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            title: "Redo (Ctrl+Y)",
                            className: "icon-button",
                            children: "↷"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            title: "Layout",
                            className: "icon-button",
                            children: "⊞"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            title: "Save Chart (Ctrl+S)",
                            className: "icon-button",
                            children: "💾"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px h-6 bg-border"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            title: "Notifications",
                            className: "icon-button",
                            children: "🔔"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onThemeToggle,
                            title: isDarkTheme ? 'Light Mode' : 'Dark Mode',
                            className: "icon-button",
                            children: isDarkTheme ? '☀️' : '🌙'
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            title: "Profile",
                            className: "icon-button",
                            children: "👤"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TopNav, "HM3Ln43XRFR/2uR77U2yFU1TAX4=");
_c = TopNav;
var _c;
__turbopack_context__.k.register(_c, "TopNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeftToolbar",
    ()=>LeftToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/utils/mockData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const LeftToolbar = ({ activeTool, onToolChange })=>{
    _s();
    const [isCollapsed, setIsCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const toggleCollapse = ()=>{
        setIsCollapsed(!isCollapsed);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `fixed left-0 top-16 bottom-0 glass border-r transition-all duration-300 ${isCollapsed ? 'w-12' : 'w-48'}`,
        style: {
            top: '64px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col py-2 px-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleCollapse,
                    className: "icon-button mb-2 justify-center",
                    title: isCollapsed ? 'Expand' : 'Collapse',
                    children: isCollapsed ? '→' : '←'
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-px h-6 bg-border mx-auto my-2"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto space-y-1",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolbarTools"].map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onToolChange(tool.id),
                            className: `w-full flex items-center gap-2 px-2 py-2 rounded-lg transition-colors text-sm font-medium ${activeTool === tool.id ? 'bg-primary text-white' : 'text-muted hover:bg-secondary/50 hover:text-foreground'}`,
                            title: tool.tooltip,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg",
                                    children: tool.icon
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex-1 text-left",
                                    children: tool.name
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx",
                                    lineNumber: 56,
                                    columnNumber: 32
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, tool.id, true, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-px h-6 bg-border mx-auto my-2"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex ${isCollapsed ? 'flex-col' : 'justify-between'} gap-1`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "icon-button flex-1",
                            title: "Zoom In (Ctrl++)",
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "icon-button flex-1",
                            title: "Zoom Out (Ctrl+-)",
                            children: "−"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn-secondary w-full mt-2 text-xs",
                    title: "Reset Zoom",
                    children: "Reset View"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LeftToolbar, "dVskpeWS3kgv81sO7C75cVYWMrM=");
_c = LeftToolbar;
var _c;
__turbopack_context__.k.register(_c, "LeftToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartArea",
    ()=>ChartArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ChartArea = ({ symbol, chartData, showIndicators, fullscreen, onFullscreenToggle })=>{
    _s();
    // Get current price from latest candle
    const currentPrice = chartData.candles[chartData.candles.length - 1]?.close || 0;
    const previousPrice = chartData.candles[chartData.candles.length - 2]?.close || currentPrice;
    const priceChange = currentPrice - previousPrice;
    const priceChangePercent = priceChange / previousPrice * 100;
    // Get OHLC info from latest candle
    const latestCandle = chartData.candles[chartData.candles.length - 1] || {};
    const simpleCandleChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChartArea.useMemo[simpleCandleChart]": ()=>{
            if (chartData.candles.length === 0) return null;
            const maxPrice = Math.max(...chartData.candles.map({
                "ChartArea.useMemo[simpleCandleChart].maxPrice": (c)=>c.high
            }["ChartArea.useMemo[simpleCandleChart].maxPrice"]));
            const minPrice = Math.min(...chartData.candles.map({
                "ChartArea.useMemo[simpleCandleChart].minPrice": (c)=>c.low
            }["ChartArea.useMemo[simpleCandleChart].minPrice"]));
            const priceRange = maxPrice - minPrice;
            return {
                maxPrice,
                minPrice,
                priceRange,
                candles: chartData.candles.slice(-50)
            };
        }
    }["ChartArea.useMemo[simpleCandleChart]"], [
        chartData.candles
    ]);
    if (!simpleCandleChart) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 bg-secondary/50 animate-pulse",
            children: "Loading chart..."
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
            lineNumber: 47,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col ${fullscreen ? 'fixed inset-0 z-50 pt-16' : 'flex-1'} bg-background`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-3 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-foreground",
                                children: symbol
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold text-foreground",
                                        children: currentPrice.toFixed(2)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm font-semibold ${priceChange >= 0 ? 'price-positive' : 'price-negative'}`,
                                        children: [
                                            priceChange >= 0 ? '+' : '',
                                            priceChange.toFixed(2),
                                            " (",
                                            priceChangePercent.toFixed(2),
                                            "%)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onFullscreenToggle,
                        className: "icon-button",
                        title: "Fullscreen (F)",
                        children: fullscreen ? '⛶' : '⛶'
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative overflow-hidden chart-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-12 left-4 glass rounded-lg p-3 text-xs spacing-y-1 z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-muted",
                                children: [
                                    "O: ",
                                    latestCandle.open?.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-accent font-semibold",
                                children: [
                                    "H: ",
                                    latestCandle.high?.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-decline font-semibold",
                                children: [
                                    "L: ",
                                    latestCandle.low?.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-foreground font-semibold",
                                children: [
                                    "C: ",
                                    latestCandle.close?.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: `0 0 ${simpleCandleChart.candles.length * 20} 400`,
                        className: "w-full h-full",
                        preserveAspectRatio: "xMidYMid slice",
                        children: [
                            Array.from({
                                length: 5
                            }).map((_, i)=>{
                                const price = simpleCandleChart.minPrice + i * simpleCandleChart.priceRange / 4;
                                const y = 400 - i * 400 / 4;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "0",
                                            y1: y,
                                            x2: simpleCandleChart.candles.length * 20,
                                            y2: y,
                                            stroke: "rgba(71, 85, 105, 0.1)",
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: simpleCandleChart.candles.length * 20 - 40,
                                            y: y - 5,
                                            fill: "#94a3b8",
                                            fontSize: "12",
                                            children: price.toFixed(0)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, `gridline-${i}`, true, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0));
                            }),
                            simpleCandleChart.candles.map((candle, idx)=>{
                                const candleX = idx * 20 + 10;
                                const wickHigh = 400 - (candle.high - simpleCandleChart.minPrice) / simpleCandleChart.priceRange * 400;
                                const wickLow = 400 - (candle.low - simpleCandleChart.minPrice) / simpleCandleChart.priceRange * 400;
                                const openY = 400 - (candle.open - simpleCandleChart.minPrice) / simpleCandleChart.priceRange * 400;
                                const closeY = 400 - (candle.close - simpleCandleChart.minPrice) / simpleCandleChart.priceRange * 400;
                                const isGreen = candle.close >= candle.open;
                                const candleColor = isGreen ? '#10b981' : '#ef4444';
                                const bodyTop = Math.min(openY, closeY);
                                const bodyHeight = Math.abs(closeY - openY) || 1;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: candleX,
                                            y1: wickHigh,
                                            x2: candleX,
                                            y2: wickLow,
                                            stroke: candleColor,
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: candleX - 6,
                                            y: bodyTop,
                                            width: "12",
                                            height: bodyHeight,
                                            fill: candleColor,
                                            opacity: "0.8"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, `candle-${idx}`, true, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0));
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                    id: "crosshair",
                                    x: "0",
                                    y: "0",
                                    width: "100",
                                    height: "100",
                                    patternUnits: "userSpaceOnUse"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-secondary/30 to-transparent border-l border-border text-xs text-muted flex flex-col justify-between px-2 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: simpleCandleChart.maxPrice.toFixed(0)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: ((simpleCandleChart.maxPrice + simpleCandleChart.minPrice) / 2).toFixed(0)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: simpleCandleChart.minPrice.toFixed(0)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-secondary/30 to-transparent border-t border-border flex items-center px-4 text-xs text-muted gap-4",
                        children: [
                            '1d ago',
                            '6h ago',
                            '3h ago',
                            'Now'
                        ].map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: label
                            }, label, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showIndicators && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-32 border-t border-border bg-secondary/30 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-semibold text-foreground mb-2",
                        children: "RSI (14)"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 100 100",
                            className: "w-full h-full",
                            preserveAspectRatio: "xMidYMid slice",
                            children: [
                                chartData.rsi.slice(-50).map((rsi, idx)=>{
                                    const x = idx / 49 * 100;
                                    const y = 100 - rsi.rsi;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: x,
                                        cy: y,
                                        r: "1",
                                        fill: "#3b82f6"
                                    }, `rsi-${idx}`, false, {
                                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                        lineNumber: 196,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0));
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "0",
                                    y1: "50",
                                    x2: "100",
                                    y2: "50",
                                    stroke: "#475569",
                                    strokeWidth: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ChartArea, "vQqbl3SDEkuPu9dtd7VU6bYOQYQ=");
_c = ChartArea;
var _c;
__turbopack_context__.k.register(_c, "ChartArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Watchlist",
    ()=>Watchlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const Watchlist = ({ watchlistSymbols, selectedSymbol, onSymbolSelect })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-3 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-foreground",
                        children: "My Watchlist"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "icon-button text-sm",
                        title: "Add symbol",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1 px-2",
                children: watchlistSymbols.map((symbol)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSymbolSelect(symbol),
                        className: `w-full p-2 rounded-lg transition-colors text-sm ${selectedSymbol === symbol.symbol ? 'bg-primary/20 border border-primary' : 'hover:bg-secondary/50 border border-transparent'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-foreground",
                                                children: symbol.symbol
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-muted",
                                                children: symbol.name
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-foreground",
                                                children: symbol.price.toFixed(2)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-xs font-semibold ${symbol.changePercent >= 0 ? 'price-positive' : 'price-negative'}`,
                                                children: [
                                                    symbol.changePercent >= 0 ? '+' : '',
                                                    symbol.changePercent.toFixed(2),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            symbol.sparklineData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 h-6 w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 100 20",
                                    className: "w-full h-full",
                                    preserveAspectRatio: "none",
                                    children: symbol.sparklineData.map((price, idx, arr)=>{
                                        const minPrice = Math.min(...arr);
                                        const maxPrice = Math.max(...arr);
                                        const range = maxPrice - minPrice || 1;
                                        const x = idx / (arr.length - 1) * 100;
                                        const y = 20 - (price - minPrice) / range * 20;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: x,
                                            cy: y,
                                            r: "1.5",
                                            fill: symbol.changePercent >= 0 ? '#10b981' : '#ef4444'
                                        }, idx, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
                                            lineNumber: 65,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, symbol.id, true, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Watchlist;
var _c;
__turbopack_context__.k.register(_c, "Watchlist");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SymbolDetails",
    ()=>SymbolDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const SymbolDetails = ({ symbol })=>{
    const formatVolume = (volume)=>{
        if (volume >= 1000000000) return (volume / 1000000000).toFixed(2) + 'B';
        if (volume >= 1000000) return (volume / 1000000).toFixed(2) + 'M';
        if (volume >= 1000) return (volume / 1000).toFixed(2) + 'K';
        return volume.toString();
    };
    const formatMarketCap = (cap)=>{
        if (!cap) return 'N/A';
        if (cap >= 1000000000000) return '$' + (cap / 1000000000000).toFixed(2) + 'T';
        if (cap >= 1000000000) return '$' + (cap / 1000000000).toFixed(2) + 'B';
        return '$' + (cap / 1000000).toFixed(2) + 'M';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3 border-t border-border pt-4 px-4 py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-semibold text-foreground text-sm",
                children: "Symbol Details"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass rounded-lg p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-muted mb-1",
                                children: "Market Status"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block w-2 h-2 rounded-full bg-accent mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Open"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass rounded-lg p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-muted mb-1",
                                children: "Volume"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-foreground",
                                children: formatVolume(symbol.volume)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass rounded-lg p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-muted mb-1",
                                children: "24h High"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-foreground",
                                children: [
                                    "$",
                                    symbol.high24h.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass rounded-lg p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-muted mb-1",
                                children: "24h Low"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-foreground",
                                children: [
                                    "$",
                                    symbol.low24h.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            symbol.marketCap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass rounded-lg p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-muted mb-1",
                        children: "Market Cap"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-semibold text-foreground",
                        children: formatMarketCap(symbol.marketCap)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary flex-1 text-xs",
                        children: "📈 Long"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-secondary flex-1 text-xs",
                        children: "📉 Short"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SymbolDetails;
var _c;
__turbopack_context__.k.register(_c, "SymbolDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/MarketSummary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarketSummary",
    ()=>MarketSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const marketData = [
    {
        symbol: 'SPX',
        name: 'S&P 500',
        price: 6909.52,
        change: 47.5,
        changePercent: 0.69
    },
    {
        symbol: 'NDX',
        name: 'Nasdaq 100',
        price: 25012.62,
        change: 216.5,
        changePercent: 0.87
    },
    {
        symbol: 'BTCUSD',
        name: 'Bitcoin',
        price: 67910.0,
        change: -54.0,
        changePercent: -0.08
    },
    {
        symbol: 'ETHUSD',
        name: 'Ethereum',
        price: 1964.5,
        change: -9.0,
        changePercent: -0.46
    },
    {
        symbol: 'EURUSD',
        name: 'EUR/USD',
        price: 1.1795,
        change: 0.0006,
        changePercent: 0.05
    },
    {
        symbol: 'XAUUSD',
        name: 'Gold',
        price: 5080.9,
        change: 84.9,
        changePercent: 1.67
    }
];
const MarketSummary = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 py-3 space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-semibold text-slate-100 uppercase tracking-wider",
                        children: "Market Summary"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/MarketSummary.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-xs text-blue-400 hover:text-blue-300",
                        children: "See All"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/MarketSummary.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/MarketSummary.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2",
                children: marketData.map((market)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-700/30 border border-slate-600/50 rounded-lg p-2 hover:bg-slate-700/50 transition-colors cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-400 mb-1",
                                children: market.symbol
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/MarketSummary.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-slate-100 mb-1",
                                children: market.symbol.includes('USD') || market.symbol.includes('JPY') ? market.price.toFixed(2) : market.price.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/MarketSummary.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-xs font-semibold ${market.changePercent >= 0 ? 'text-green-400' : 'text-red-400'}`,
                                children: [
                                    market.changePercent >= 0 ? '+' : '',
                                    market.changePercent.toFixed(2),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/MarketSummary.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, market.symbol, true, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/MarketSummary.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/MarketSummary.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/MarketSummary.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MarketSummary;
var _c;
__turbopack_context__.k.register(_c, "MarketSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/HotMovers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HotMovers",
    ()=>HotMovers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const hotMovers = [
    {
        symbol: 'NVDA',
        name: 'NVIDIA',
        price: 142.35,
        change: 8.42,
        changePercent: 6.3,
        volume: '145.2M'
    },
    {
        symbol: 'TSLA',
        name: 'Tesla',
        price: 242.56,
        change: -8.23,
        changePercent: -3.28,
        volume: '145.2M'
    },
    {
        symbol: 'AAPL',
        name: 'Apple',
        price: 195.45,
        change: 8.23,
        changePercent: 4.39,
        volume: '52.3M'
    },
    {
        symbol: 'MSFT',
        name: 'Microsoft',
        price: 417.23,
        change: 12.34,
        changePercent: 3.05,
        volume: '18.3M'
    },
    {
        symbol: 'AMZN',
        name: 'Amazon',
        price: 198.76,
        change: -5.45,
        changePercent: -2.67,
        volume: '68.9M'
    },
    {
        symbol: 'GOOGL',
        name: 'Alphabet',
        price: 156.78,
        change: -3.45,
        changePercent: -2.15,
        volume: '28.3M'
    }
];
const HotMovers = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold text-slate-100 uppercase tracking-wider",
                    children: "Hot Movers"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/HotMovers.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/HotMovers.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1 px-4",
                children: hotMovers.map((mover)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-2 rounded-lg hover:bg-slate-700/30 transition-colors text-sm cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold text-slate-100",
                                        children: mover.symbol
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/HotMovers.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-400",
                                        children: [
                                            mover.volume,
                                            " volume"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/HotMovers.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/HotMovers.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold text-slate-100",
                                        children: [
                                            "$",
                                            mover.price.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/HotMovers.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-xs font-semibold ${mover.changePercent >= 0 ? 'text-green-400' : 'text-red-400'}`,
                                        children: [
                                            mover.changePercent >= 0 ? '▲' : '▼',
                                            " ",
                                            Math.abs(mover.changePercent).toFixed(2),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/HotMovers.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/HotMovers.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, mover.symbol, true, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/HotMovers.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/HotMovers.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/HotMovers.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HotMovers;
var _c;
__turbopack_context__.k.register(_c, "HotMovers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RightSidebar",
    ()=>RightSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$Watchlist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$SymbolDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$MarketSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/MarketSummary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$HotMovers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/HotMovers.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const RightSidebar = ({ watchlistSymbols, selectedSymbol, onSymbolSelect, isCollapsed, onCollapsedChange })=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('watchlist');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `fixed right-0 top-16 bottom-0 glass border-l transition-all duration-300 overflow-hidden ${isCollapsed ? 'w-0' : 'w-80'}`,
        style: {
            top: '64px'
        },
        children: [
            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-3 border-b border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('watchlist'),
                                        className: `text-xs font-medium pb-2 px-1 border-b-2 transition-colors ${activeTab === 'watchlist' ? 'text-foreground border-blue-500' : 'text-muted border-transparent hover:text-foreground'}`,
                                        children: "Watchlist"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('details'),
                                        className: `text-xs font-medium pb-2 px-1 border-b-2 transition-colors ${activeTab === 'details' ? 'text-foreground border-blue-500' : 'text-muted border-transparent hover:text-foreground'}`,
                                        children: "Details"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('markets'),
                                        className: `text-xs font-medium pb-2 px-1 border-b-2 transition-colors ${activeTab === 'markets' ? 'text-foreground border-blue-500' : 'text-muted border-transparent hover:text-foreground'}`,
                                        children: "Markets"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('movers'),
                                        className: `text-xs font-medium pb-2 px-1 border-b-2 transition-colors ${activeTab === 'movers' ? 'text-foreground border-blue-500' : 'text-muted border-transparent hover:text-foreground'}`,
                                        children: "Movers"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onCollapsedChange(true),
                                className: "icon-button",
                                title: "Collapse",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        children: [
                            activeTab === 'watchlist' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$Watchlist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Watchlist"], {
                                watchlistSymbols: watchlistSymbols,
                                selectedSymbol: selectedSymbol.symbol,
                                onSymbolSelect: onSymbolSelect
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'details' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$SymbolDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SymbolDetails"], {
                                symbol: selectedSymbol
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'markets' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$MarketSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarketSummary"], {}, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'movers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$HotMovers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HotMovers"], {}, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onCollapsedChange(false),
                className: "absolute right-0 top-4 -left-10 z-50 icon-button",
                title: "Expand",
                children: "◀"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(RightSidebar, "0DpN7vFdoilxL/HCeibBQPN+HBo=");
_c = RightSidebar;
var _c;
__turbopack_context__.k.register(_c, "RightSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomPanel",
    ()=>BottomPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/utils/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const BottomPanel = ({ isCollapsed, onCollapsedChange, height, onHeightChange })=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('trading');
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dividerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BottomPanel.useEffect": ()=>{
            if (!isDragging) return;
            const handleMouseMove = {
                "BottomPanel.useEffect.handleMouseMove": (e)=>{
                    const deltaY = e.clientY;
                    const newHeight = window.innerHeight - deltaY - 64; // 64px for top nav
                    if (newHeight >= __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOTTOM_PANEL_MIN_HEIGHT"]) {
                        onHeightChange(newHeight);
                    }
                }
            }["BottomPanel.useEffect.handleMouseMove"];
            const handleMouseUp = {
                "BottomPanel.useEffect.handleMouseUp": ()=>{
                    setIsDragging(false);
                }
            }["BottomPanel.useEffect.handleMouseUp"];
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return ({
                "BottomPanel.useEffect": ()=>{
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                }
            })["BottomPanel.useEffect"];
        }
    }["BottomPanel.useEffect"], [
        isDragging,
        onHeightChange
    ]);
    const renderTabContent = (tabId)=>{
        switch(tabId){
            case 'trading':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-muted mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block w-2 h-2 rounded-full bg-accent mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Market Status: Open"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 gap-2 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass rounded p-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-muted mb-1",
                                            children: "Position Size"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "0",
                                            className: "w-full bg-secondary/30 border border-border rounded px-2 py-1 text-foreground text-xs"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass rounded p-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-muted mb-1",
                                            children: "Take Profit"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "0",
                                            className: "w-full bg-secondary/30 border border-border rounded px-2 py-1 text-foreground text-xs"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass rounded p-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-muted mb-1",
                                            children: "Stop Loss"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "0",
                                            className: "w-full bg-secondary/30 border border-border rounded px-2 py-1 text-foreground text-xs"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass rounded p-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-muted mb-1",
                                            children: "Leverage"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full bg-secondary/30 border border-border rounded px-2 py-1 text-foreground text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "1x"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "5x"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "10x"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex-1 btn-primary text-sm",
                                    children: "📈 Buy"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex-1 btn-secondary text-sm",
                                    children: "📉 Sell"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex-1 btn-secondary text-sm",
                                    children: "❌ Close"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'strategy':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-muted",
                            children: "Strategy Tester"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass rounded p-3 text-xs space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted",
                                            children: "Total Trades:"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-foreground font-semibold",
                                            children: "127"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted",
                                            children: "Win Rate:"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "price-positive font-semibold",
                                            children: "62.3%"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted",
                                            children: "Total Return:"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "price-positive font-semibold",
                                            children: "+24.5%"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted",
                                            children: "Max Drawdown:"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "price-negative font-semibold",
                                            children: "-8.2%"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-primary w-full text-sm",
                            children: "Run Backtest"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'pine':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-secondary text-xs",
                                    children: "New Script"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-secondary text-xs",
                                    children: "Load Script"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            placeholder: "// Write your Pine Script here...",
                            className: "w-full h-32 px-3 py-2 bg-secondary/30 border border-border rounded text-foreground font-mono text-xs resize-none focus:outline-none focus:ring-1 focus:ring-primary"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                    lineNumber: 113,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'logs':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1 text-xs font-mono",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-muted",
                            children: "[2025-02-22 14:30:45] Chart loaded"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-muted",
                            children: "[2025-02-22 14:30:46] Indicator RSI(14) calculated"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-muted",
                            children: "[2025-02-22 14:30:47] Market data updated"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-accent",
                            children: "[2025-02-22 14:30:48] ✓ Ready for trading"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'alerts':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass rounded p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-foreground mb-1",
                                    children: "Price Alert: BTCUSD"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-muted",
                                    children: "When price crosses $45,500 - Active"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass rounded p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-foreground mb-1",
                                    children: "Volume Alert"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-muted",
                                    children: "Volume exceeds 20M - Disabled"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-primary w-full text-sm",
                            children: "+ Create Alert"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return null;
        }
    };
    if (isCollapsed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-0 left-0 right-0 bg-secondary/50 border-t border-border px-4 py-2 z-30",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onCollapsedChange(false),
                className: "text-sm text-muted hover:text-foreground transition-colors",
                children: "Terminal • Logs • Alerts (Collapsed)"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-0 left-0 right-0 glass border-t border-border z-30 flex flex-col",
        style: {
            height: `${height}px`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dividerRef,
                onMouseDown: ()=>setIsDragging(true),
                className: "h-1 bg-primary/50 hover:bg-primary cursor-ns-resize transition-colors",
                title: "Drag to resize"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2 border-b border-border bg-background/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOTTOM_PANEL_TABS"].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: `px-3 py-1 rounded-t-md text-sm font-medium transition-colors ${activeTab === tab.id ? 'bg-secondary text-foreground' : 'text-muted hover:text-foreground'}`,
                                children: tab.label
                            }, tab.id, false, {
                                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onCollapsedChange(true),
                        className: "icon-button",
                        title: "Collapse",
                        children: "▼"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-4 py-3",
                children: renderTabContent(activeTab)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BottomPanel, "vUy7Js5o8k2Mv+hYhPGPMOrvkWk=");
_c = BottomPanel;
var _c;
__turbopack_context__.k.register(_c, "BottomPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$TopNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$LeftToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$ChartArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$RightSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$Watchlist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Watchlist.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$SymbolDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/SymbolDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$BottomPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$MarketSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/MarketSummary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$HotMovers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/HotMovers.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dashboard",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$TopNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/TopNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$LeftToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/LeftToolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$ChartArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/ChartArea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$RightSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/RightSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$BottomPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/BottomPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/utils/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/Trad2/trading-dashboard/src/utils/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Dashboard = ()=>{
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        selectedSymbol: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockSymbols"][0],
        timeframe: {
            label: '1H',
            value: '1H'
        },
        isDarkTheme: true,
        showIndicators: false,
        toolbarCollapsed: true,
        rightSidebarCollapsed: false,
        bottomPanelCollapsed: false,
        activeBottomTab: 'trading',
        activeTool: null
    });
    const [chartData, setChartData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateMockChartData"])());
    const [fullscreen, setFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bottomPanelHeight, setBottomPanelHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOTTOM_PANEL_DEFAULT_HEIGHT"]);
    // Handle keyboard shortcuts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            const handleKeyDown = {
                "Dashboard.useEffect.handleKeyDown": (e)=>{
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
                    if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || e.shiftKey && e.key === 'z')) {
                        e.preventDefault();
                    // Redo logic
                    }
                }
            }["Dashboard.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "Dashboard.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["Dashboard.useEffect"];
        }
    }["Dashboard.useEffect"], [
        fullscreen
    ]);
    const handleSymbolSelect = (symbol)=>{
        setState((prev)=>({
                ...prev,
                selectedSymbol: symbol
            }));
        setChartData((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateMockChartData"])());
    };
    const handleTimeframeChange = (timeframe)=>{
        setState((prev)=>({
                ...prev,
                timeframe
            }));
        setChartData((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateMockChartData"])());
    };
    const handleSearchChange = (symbol)=>{
        const found = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockSymbols"].find((s)=>s.symbol === symbol);
        if (found) {
            handleSymbolSelect(found);
        }
    };
    const handleToolChange = (toolId)=>{
        setState((prev)=>({
                ...prev,
                activeTool: prev.activeTool === toolId ? null : toolId
            }));
    };
    const handleThemeToggle = ()=>{
        setState((prev)=>({
                ...prev,
                isDarkTheme: !prev.isDarkTheme
            }));
    };
    const handleToggleIndicators = ()=>{
        setState((prev)=>({
                ...prev,
                showIndicators: !prev.showIndicators
            }));
    };
    const mainMarginLeft = state.toolbarCollapsed ? '48px' : '200px';
    const mainMarginRight = state.rightSidebarCollapsed ? '0' : '320px';
    const mainMarginBottom = state.bottomPanelCollapsed ? '0' : `${bottomPanelHeight}px`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen ${state.isDarkTheme ? 'dark' : 'light'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$TopNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopNav"], {
                selectedSymbol: state.selectedSymbol.symbol,
                selectedTimeframe: state.timeframe,
                onTimeframeChange: handleTimeframeChange,
                onSearchChange: handleSearchChange,
                isDarkTheme: state.isDarkTheme,
                onThemeToggle: handleThemeToggle
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Dashboard.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-16 left-0 right-0 bottom-0 flex",
                style: {
                    top: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOP_NAV_HEIGHT"]}px`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$LeftToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeftToolbar"], {
                        activeTool: state.activeTool,
                        onToolChange: handleToolChange
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Dashboard.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col",
                        style: {
                            marginLeft: mainMarginLeft,
                            marginRight: mainMarginRight,
                            marginBottom: mainMarginBottom
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$ChartArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartArea"], {
                            symbol: state.selectedSymbol.symbol,
                            chartData: chartData,
                            showIndicators: state.showIndicators,
                            fullscreen: fullscreen,
                            onFullscreenToggle: ()=>setFullscreen(!fullscreen)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Dashboard.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Dashboard.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$RightSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RightSidebar"], {
                        watchlistSymbols: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$utils$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultWatchlist"].symbols,
                        selectedSymbol: state.selectedSymbol,
                        onSymbolSelect: handleSymbolSelect,
                        isCollapsed: state.rightSidebarCollapsed,
                        onCollapsedChange: (collapsed)=>setState((prev)=>({
                                    ...prev,
                                    rightSidebarCollapsed: collapsed
                                }))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Dashboard.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Dashboard.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$Trad2$2f$trading$2d$dashboard$2f$src$2f$components$2f$BottomPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomPanel"], {
                isCollapsed: state.bottomPanelCollapsed,
                onCollapsedChange: (collapsed)=>setState((prev)=>({
                            ...prev,
                            bottomPanelCollapsed: collapsed
                        })),
                height: bottomPanelHeight,
                onHeightChange: setBottomPanelHeight
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Dashboard.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/Trad2/trading-dashboard/src/components/Dashboard.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Dashboard, "ZFT0ZGHhWojztpJNdfCOm4jqC18=");
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_Trad2_trading-dashboard_src_c0a684fe._.js.map