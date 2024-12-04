import { padNumber } from '../utils/dateUtils.js';

/**
 * Calculates time units from milliseconds
 * @param {number} distance - Time difference in milliseconds
 * @returns {Object} Object containing days, hours, minutes, seconds
 */
function calculateTimeUnits(distance) {
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000)
  };
}

/**
 * Updates the DOM elements with the current timer values
 * @param {Object} elements - DOM elements for the timer
 * @param {Object} timeUnits - Calculated time units
 */
function updateTimerDisplay(elements, timeUnits) {
  Object.entries(timeUnits).forEach(([unit, value]) => {
    if (elements[unit]) {
      elements[unit].textContent = padNumber(value);
    }
  });
}

export function initTimer(elements, targetDate) {
  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(timerInterval);
      Object.values(elements).forEach(el => el.textContent = '00');
      return;
    }

    const timeUnits = calculateTimeUnits(distance);
    updateTimerDisplay(elements, timeUnits);
  }

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();

  return () => clearInterval(timerInterval);
}