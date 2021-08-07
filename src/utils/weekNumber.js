import { weekNumber as wN } from 'weeknumber'
// https://www.javatpoint.com/calculate-current-week-number-in-javascript
export const weeklyActivities = (activities) => {
  return activities.reduce((arr, activity) => {
    const activityDate = new Date(activity.start_date);
    const weekNumber = wN(activityDate)

    const weekYear = activityDate.getFullYear();
    const [weekMonth, weekStartDate, weekEndDate] = getWeekStartAndEndDate(activityDate)

    const weekGroup = arr.find((item) => item.weekNumber === weekNumber && item.weekYear === weekYear);
    if (weekGroup) { // add arry if week match
      weekGroup.activities.push(activity);
    } else { // create new arry if not match
      // const [weekMonth, weekStartDate, weekEndDate] = getWeekStartAndEndDate(activityDate)

      arr.push({
        weekYear: weekYear,
        weekNumber: weekNumber,
        activities: [activity],
        weekMonth,
        weekStartDate,
        weekEndDate,
      })
    }
    return arr;
  }, []);
}

const getDateWeek = (d) => {
  const date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const numberOfDays = Math.floor((date.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000))
  const result = Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
  return result;
}


// https://stackoverflow.com/questions/5210376/how-to-get-first-and-last-day-of-the-current-week-in-javascript
const getWeekStartAndEndDate = (d) => {
  const date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  
  // monday
  const first = date.getDate() - date.getDay() + 1;
  // sunday
  const last = first + 6;

  const weekMonth = getMonthName(date);
  const weekStartDate = new Date(date.setDate(first)).getDate();
  const weekEndDate = new Date(date.setDate(last)).getDate();
  return [weekMonth, weekStartDate, weekEndDate];
}

const getMonthName = (d) => {
  return d.toLocaleString('default', { month: 'short' })
}