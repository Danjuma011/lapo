import React from "react";

interface RadioGroupProps {
  name: string;
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
  error?: string; // Add error prop
}

const RadioGroup: React.FC<RadioGroupProps> = ({ name, options, selectedValue, onChange, error }) => {
  return (
    <div>
      <div className="flex space-x-4">
        {options.map((option) => (
          <label key={option} className="flex items-center cursor-pointer space-x-2">
            <input
              type="radio"
              name={name}
              value={option}
              checked={selectedValue === option}
              onChange={() => onChange(option)}
              className="hidden"
            />

            <div
              className={`w-5 h-5 flex items-center justify-center rounded-full border-2 transition-all ${
                selectedValue === option
                  ? "border-blue-300 bg-blue-300"
                  : "border-gray-400 bg-transparent"
              }`}
            >
              {selectedValue === option && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
            </div>

            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
      
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>} {/* Display error message */}
    </div>
  );
};

export default RadioGroup;
