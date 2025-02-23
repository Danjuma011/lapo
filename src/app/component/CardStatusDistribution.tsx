

"use client"; 

import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";


interface CardStatusDistributionProps {
  className?: string; // Optional className prop
}


const data = [
  { name: "Active", value: 30 },
  { name: "Expired", value: 20 },
  { name: "Inactive", value: 50 },
  { name: "Blocked", value: 40 },
  { name: "Lost", value: 40 },
];

const COLORS = ["#00984C", "#FFBA24", "#014DAF", "#8020E7", "#FF4457"]; // Custom colors

    const CardStatusDistribution: React.FC<CardStatusDistributionProps> = ({ className }) => {
  
  return (
    <div className={` h-96 p-4 bg-white shadow-md rounded-lg ${className}`}>
      <h2 className="text-lg font-medium mb-4">Card Status Distribution</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie 
            data={data} 
            dataKey="value" 
            nameKey="name" 
            cx="50%" 
            cy="50%" 
            outerRadius={80} 
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CardStatusDistribution;
