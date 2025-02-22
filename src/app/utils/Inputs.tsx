import React from "react";

interface InputProps {
  type: "edit" | "no-edit"; // Controls whether input is editable
  inputType?: "text" | "number"; // Defines expected input type
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  inputType,
  value,
  onChange,
  placeholder,
  className,
  label,
  error,
}) => {
  // Base styles
  const baseStyles: React.CSSProperties = {
    padding: "0.5rem 1rem",
    outline: "none",
    borderRadius: "0.5rem",
    width: "100%",
    fontSize: "16px",
    fontWeight: "400",
    border: "1px solid #D0D5DD",
    backgroundColor: "#F5F5F7",
  };

  // Styles for editable inputs
  const editStyles: React.CSSProperties = {
    backgroundColor: "#FFFFFF",
    borderColor: "#D0D5DD",
  };

  // Styles for non-editable inputs
  const noEditStyles: React.CSSProperties = {
    backgroundColor: "#F5F5F7",
    borderColor: "#F5F5F7",
  };

  // Error styles
  const errorStyles: React.CSSProperties = {
    borderColor: "#FF4D4D",
    
  };

  // Apply styles based on props
  const inputStyles: React.CSSProperties = {
    ...baseStyles,
    ...(type === "edit" ? editStyles : noEditStyles),
    ...(error ? errorStyles : {}),
  };

  return (
    <div>
      {/* Label */}
      {label && (
        <label
          style={{
            display: "block",
            marginBottom: "3px",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          {label}
        </label>
      )}

      {/* Input field */}
      <input
        type={inputType} // Dynamically set input type
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputStyles}
        className={className}
        readOnly={type === "no-edit"}
      />

      {/* Error message */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
