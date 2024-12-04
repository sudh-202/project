/**
 * Creates a date object set to a specific number of months in the future
 * @param {number} months - Number of months to add
 * @returns {Date} Future date
 */
export function getFutureDate(months) {
  const date = new Date();
  date.setMonth(date.getMonth() + months);
  return date;
}

/**
 * Formats a number to have at least two digits
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export function padNumber(num) {
  return num.toString().padStart(2, '0');
}