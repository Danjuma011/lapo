/**
 * Utility functions for common operations across the application
 */

/**
 * Normalize status string to title case for consistent comparison
 */
export const normalizeStatus = (status: string): string => {
  return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
};

/**
 * Format date string to a readable format
 */
// export const formatDate = (dateString: string): string => {
//   try {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   } catch (error) {
//     return dateString; // Return original string if parsing fails
//   }
// };

/**
 * Format number with locale-specific formatting
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

/**
 * Format currency with locale-specific formatting
 */
export const formatCurrency = (
  amount: number,
  currency: string = "NGN"
): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currency,
  }).format(amount);
};

/**
 * Debounce function to limit function calls
 */

/**
 * Generate a random batch number
 */
export const generateBatchNumber = (): string => {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

/**
 * Get initials from name
 */
export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
};
