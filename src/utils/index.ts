import { DAYS } from './constants';

// Get week number of month
const getWeekNumber = (): number => {
  const day = new Date().getDate();

  if (day >= 1 && day <= 7) {
    return 0;
  } else if (day >= 8 && day <= 14) {
    return 1;
  } else if (day >= 15 && day <= 21) {
    return 2;
  } else if (day >= 22 && day <= 28) {
    return 0;
  } else {
    return 1;
  }
};

const hasPassedWeek = (weekNumber: number): boolean =>
  weekNumber < getWeekNumber();
// Get day of the week
const getDayOfWeek = (day: string): number => {
  switch (day) {
    case DAYS.MONDAY:
      return 1;
    case DAYS.WEDNESDAY:
      return 3;
    case DAYS.FRIDAY:
      return 5;
    case DAYS.SUNDAY:
      return 0;
    default:
      return 0;
  }
};

export { getWeekNumber, getDayOfWeek, hasPassedWeek };
