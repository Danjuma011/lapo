"use client";
import { useState, useRef } from "react";

const CalendarDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState("2024-11-11");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center border border-gray-400 px-2 py-2 rounded-md gap-2">
    
      <input
        ref={inputRef}
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="outline-none border-none bg-transparent cursor-pointer w-full 
                   appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
      />
    </div>
  );
};

export default CalendarDatePicker;
