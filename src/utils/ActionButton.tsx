import React from "react";

interface ActionButtonProps {
  text: string;
  bgColor: string;
  icon: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  bgColor,
  icon,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`flex items-center justify-start w-[400px] px-4 py-2 text-white rounded-lg shadow-md transition-opacity ${
        disabled ? "cursor-not-allowed" : "hover:opacity-90"
      }`}
      style={{
        backgroundColor: bgColor, 
        opacity: disabled ? 0.5 : 1, 
      }}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <span className="mr-2">{icon}</span>
      {text}
    </button>
  );
};

export default ActionButton;