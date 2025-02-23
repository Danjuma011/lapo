"use client"

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const CustomDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-fit">
      <div
        className="flex items-center space-x-2 border border-gray-300 px-3 py-2 rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaCalendarAlt className="text-gray-500" />
        <span className="text-gray-700">
          {selectedDate
            ? selectedDate.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
            : "Select Date"}
        </span>
      </div>
      {isOpen && (
        <div className="absolute left-0 mt-2 z-50">
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => {
              setSelectedDate(date);
              setIsOpen(false);
            }}
            inline
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className="border border-gray-300 rounded-md shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
