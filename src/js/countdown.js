import { getFutureDate } from './utils/dateUtils.js';
import { initTimer } from './components/timer.js';

export function initCountdown(months = 6) {
  const timerElements = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
  };

  const targetDate = getFutureDate(months);
  return initTimer(timerElements, targetDate);
}