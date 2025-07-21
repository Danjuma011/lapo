import React from "react";
import { StatusColors } from "@/static/statusEnum";
import { normalizeStatus } from "./helpers";

interface StatusBadgeProps {
  status: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = "md",
  className = "",
}) => {
  const normalizedStatus = normalizeStatus(status);

  const sizeClasses = {
    sm: "px-1.5 py-0.5 text-xs",
    md: "px-2 py-1 text-xs",
    lg: "px-3 py-1.5 text-sm",
  };

  const getStatusClasses = (status: string) => {
    switch (status) {
      case "Ready":
        return `${StatusColors.Ready.border} ${StatusColors.Ready.background} ${StatusColors.Ready.text}`;
      case "In Progress":
        return `${StatusColors.InProgress.border} ${StatusColors.InProgress.background} ${StatusColors.InProgress.text}`;
      case "Acknowledged":
        return `${StatusColors.Acknowledged.border} ${StatusColors.Acknowledged.background} ${StatusColors.Acknowledged.text}`;
      case "Pending":
        return `${StatusColors.Pending.border} ${StatusColors.Pending.background} ${StatusColors.Pending.text}`;
      default:
        return `${StatusColors.default.border} ${StatusColors.default.background} ${StatusColors.default.text}`;
    }
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium ${
        sizeClasses[size]
      } ${getStatusClasses(normalizedStatus)} ${className}`}
    >
      {normalizedStatus}
    </span>
  );
};

export default StatusBadge;
