import React from "react";

interface DropdownProps {
  type: "edit" | "no-edit";
  inputType?: "text" | "number";
  value: string | number;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: (string | number)[];
  placeholder?: string;
  className?: string;
  label?: string;
  error?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  type,
  value,
  onChange,
  options,
  placeholder,
  className,
  label,
  error,
}) => {
  return (
    <div className="relative w-full">
      {/* Label */}
      {label && (
        <label className="block mb-1 font-medium text-sm">{label}</label>
      )}

      {/* Dropdown */}
      <div className="relative ">
        <select
          value={value}
          onChange={onChange}
          className={`w-full appearance-none px-4 py-2 pr-10 rounded-lg border cursor-pointer ${
            type === "edit"
              ? "bg-white border-gray-300"
              : "bg-gray-200 border-gray-200 cursor-not-allowed"
          } text-gray-900 focus:outline-none ${
            error ? "border-red-500 " : ""
          } ${className}`}
          disabled={type === "no-edit"}
        >
          {placeholder && (
            <option value="" disabled className="text-gray-900">
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={index} value={option} className="">
              {option}
            </option>
          ))}
        </select>

        {/* Custom Arrow */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Error message */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Dropdown;
