import React from "react";
import { BulkAction } from "./type";

interface BulkActionsProps {
  selectedIds: string[];
  actions: BulkAction[];
  onClearSelection: () => void;
  className?: string;
}

const BulkActions: React.FC<BulkActionsProps> = ({
  selectedIds,
  actions,
  onClearSelection,
  className = "",
}) => {
  if (selectedIds.length === 0) return null;

  const getButtonClasses = (variant: string = "secondary") => {
    const baseClasses =
      "px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    switch (variant) {
      case "primary":
        return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`;
      case "danger":
        return `${baseClasses} bg-red-600 text-white hover:bg-red-700 focus:ring-red-500`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500`;
    }
  };

  return (
    <div
      className={`bg-blue-50 border border-blue-200 rounded-lg p-3 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-blue-900">
            {selectedIds.length} item{selectedIds.length !== 1 ? "s" : ""}{" "}
            selected
          </span>

          <div className="flex gap-2">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={() => action.action(selectedIds)}
                disabled={action.disabled}
                className={`${getButtonClasses(action.variant)} ${
                  action.disabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onClearSelection}
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          Clear selection
        </button>
      </div>
    </div>
  );
};

export default BulkActions;
