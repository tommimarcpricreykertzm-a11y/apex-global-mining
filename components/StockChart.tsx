import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { StockDataPoint } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const data: StockDataPoint[] = [
  { date: 'Jan', price: 42.5 },
  { date: 'Feb', price: 44.2 },
  { date: 'Mar', price: 43.8 },
  { date: 'Apr', price: 46.5 },
  { date: 'May', price: 48.1 },
  { date: 'Jun', price: 47.5 },
  { date: 'Jul', price: 51.2 },
  { date: 'Aug', price: 53.8 },
];

const StockChart: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full h-64 bg-slate-800/50 rounded-lg p-4 border border-slate-700">
      <div className="flex justify-between items-end mb-4 px-2">
        <div>
           <p className="text-slate-400 text-xs uppercase tracking-wider">{t.inv_chart_title}</p>
           <h3 className="text-3xl font-bold text-white">$53.80</h3>
        </div>
        <div className="text-green-400 text-sm font-medium bg-green-900/30 px-2 py-1 rounded">
          +12.4% YTD
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="75%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#d4af37" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#d4af37" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="date" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 10 }} 
          />
          <YAxis 
            hide 
            domain={['dataMin - 5', 'dataMax + 5']}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '4px' }}
            itemStyle={{ color: '#d4af37' }}
          />
          <Area 
            type="monotone" 
            dataKey="price" 
            stroke="#d4af37" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorPrice)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;