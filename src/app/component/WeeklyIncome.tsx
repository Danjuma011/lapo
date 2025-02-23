"use client"; 

import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface WeeklyIncomeProps {
  className?: string; // Optional className prop
}

const data = [
  { name: "Mon", sales: 20 },
  { name: "Tue", sales: 40 },
  { name: "Wed", sales: 20 },
  { name: "Thur", sales: 50 },
  { name: "Fri", sales: 30 },
  { name: "Sat", sales: 10 },
  { name: "Sun", sales: 50 },
];

  const WeeklyIncome: React.FC<WeeklyIncomeProps> = ({ className }) => {
  
  return (
    <div className={` h-96 p-4 bg-white shadow-md rounded-lg ${className}`}>
      <h2 className="text-lg font-medium mb-4">This Week’s Income</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} tickCount={6} ticks={[0, 20, 40, 60, 80, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#10B981" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyIncome;
