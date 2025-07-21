import { CardRequest } from "./type";
import { formatDate, formatNumber } from "./helpers";

/**
 * Convert data to CSV format
 */
export const convertToCSV = (data: CardRequest[]): string => {
  if (data.length === 0) return "";

  // Define headers
  const headers = [
    "Branch",
    "Initiator",
    "Quantity",
    "Batch",
    "Date Requested",
    "Status",
    "Card Type",
    "Card Charges",
  ];

  // Convert data to rows
  const rows = data.map((item) => [
    item.branch,
    item.initiator,
    item.quantity.toString(),
    item.batch,
    formatDate(item.dateRequested),
    item.status,
    item.cardType || "",
    item.cardCharges ? formatNumber(item.cardCharges) : "",
  ]);

  // Combine headers and rows
  const csvContent = [headers, ...rows]
    .map((row) => row.map((cell) => `"${cell}"`).join(","))
    .join("\n");

  return csvContent;
};

/**
 * Download data as CSV file
 */
export const downloadCSV = (
  data: CardRequest[],
  filename: string = "card-requests.csv"
): void => {
  const csvContent = convertToCSV(data);

  if (!csvContent) {
    console.warn("No data to export");
    return;
  }

  // Create blob and download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

/**
 * Generate filename with timestamp
 */
export const generateFilename = (prefix: string = "export"): string => {
  const now = new Date();
  const timestamp = now.toISOString().slice(0, 19).replace(/:/g, "-");
  return `${prefix}-${timestamp}.csv`;
};
