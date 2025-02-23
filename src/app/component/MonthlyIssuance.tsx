"use client"; // For Next.js if using client-side rendering

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface MonthlyIssuanceProps {
  className?: string; // Optional className prop
}

const data = [
  { name: "May", sales: 20 },
  { name: "Jun", sales: 40 },
  { name: "July", sales: 60 },
  { name: "Sep", sales: 80 },
  { name: "Oct", sales: 100 },
  { name: "Nov", sales: 80 },
];

const MonthlyIssuance: React.FC<MonthlyIssuanceProps> = ({ className }) => {
  return (
    <div className={` h-96 p-4 bg-white shadow-md rounded-lg ${className}`}>
      <h2 className="text-lg font-medium mb-4">Monthly Issuance</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} tickCount={6} ticks={[0, 20, 40, 60, 80, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#014DAF" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyIssuance;
