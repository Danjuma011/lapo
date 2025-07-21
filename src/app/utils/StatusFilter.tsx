import React from "react";
import { CardStatus } from "./type";
import StatusBadge from "./StatusBadge";

interface StatusFilterProps {
  selectedStatuses: CardStatus[];
  onStatusChange: (statuses: CardStatus[]) => void;
  className?: string;
}

const StatusFilter: React.FC<StatusFilterProps> = ({
  selectedStatuses,
  onStatusChange,
  className = "",
}) => {
  const allStatuses: CardStatus[] = [
    "Pending",
    "In Progress",
    "Acknowledged",
    "Ready",
  ];

  const handleStatusToggle = (status: CardStatus) => {
    if (selectedStatuses.includes(status)) {
      onStatusChange(selectedStatuses.filter((s) => s !== status));
    } else {
      onStatusChange([...selectedStatuses, status]);
    }
  };

  const handleSelectAll = () => {
    onStatusChange(allStatuses);
  };

  const handleClearAll = () => {
    onStatusChange([]);
  };

  return (
    <div className={`flex flex-wrap gap-2 items-center ${className}`}>
      <span className="text-sm font-medium text-gray-700 mr-2">Status:</span>

      {allStatuses.map((status) => (
        <button
          key={status}
          onClick={() => handleStatusToggle(status)}
          className={`px-3 py-1 rounded-full border transition-all ${
            selectedStatuses.includes(status)
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-white hover:bg-gray-50"
          }`}
        >
          <StatusBadge status={status} size="sm" />
        </button>
      ))}

      <div className="flex gap-1 ml-2">
        <button
          onClick={handleSelectAll}
          className="text-xs text-blue-600 hover:text-blue-800 underline"
        >
          Select All
        </button>
        <span className="text-gray-400">|</span>
        <button
          onClick={handleClearAll}
          className="text-xs text-gray-600 hover:text-gray-800 underline"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default StatusFilter;
