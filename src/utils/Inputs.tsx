import React from 'react';

interface InputProps {
  type: 'no-edit' | 'edit';
  value: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  label?: string; // Optional label prop
}

const Input: React.FC<InputProps> = ({ type, value, onChange, placeholder, className, label }) => {
  // Base styles for the input
  const baseStyles = {
    padding: '0.5rem 1rem', // px-4 py-2
    outline: 'none', // focus:outline-none
    borderRadius: '0.5rem', // rounded-lg
    width: '100%', // Make the input take full width
    fontSize: '16px', // Set font size to 16px
    fontWeight: '400', // Set font weight to 400
  };

  // Styles for the 'edit' type
  const editStyles = {
    backgroundColor: '#F5F5F7', // bg-[#F5F5F7]
    borderColor: '#D0D5DD', // border-[#F5F5F7]
  };

  // Styles for the 'no-edit' type
  const noEditStyles = {
    backgroundColor: '#F5F5F7', // bg-[#D0D5DD]
    borderColor: '#F5F5F7', // border-[#F5F5F7]
  };

  // Combine base styles with conditional styles
  const inputStyles = {
    ...baseStyles,
    ...(type === 'edit' ? editStyles : noEditStyles),
  };

  return (
    <div>
      {/* Render the label if provided */}
      {label && (
        <label style={{ display: 'block', marginBottom: '3px', fontWeight: '500', fontSize: '14px' }}>
          {label}
        </label>
      )}

      {/* Input field */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputStyles}
        className={className} // Pass any additional className
        readOnly={type === 'no-edit'}
      />
    </div>
  );
};

export default Input;