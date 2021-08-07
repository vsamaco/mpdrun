import React from 'react'
import { weeklyActivities } from '../utils/weekNumber'
import { metersToMiles, metersToFeet } from '../utils/distance';
import { formatHumanizeSeconds } from '../utils/time';

const Week = ({activities}) => {
  const weeks = weeklyActivities(activities);
  const thisWeek = weeks[0];
  const { weekNumber, week } = thisWeek;

  const weekRuns = thisWeek.activities.length;
  const weekDistance = thisWeek.activities.reduce((arr, activity) => arr += activity.distance, 0)
  const weekDuration = thisWeek.activities.reduce((arr, activity) => arr += activity.moving_time, 0)
  const weekElevation = thisWeek.activities.reduce((arr, activity) => arr += activity.total_elevation_gain, 0);

  return (
    <div className="py-10 px-5 sm:py-20 sm:px-10 flex flex-col justify-center border-t-4 border-blue-300">
      <h2 className="text-8xl font-light text-blue-300">WEEK</h2>
      <p className="text-4xl mt-3 uppercase">{thisWeek.weekMonth} {thisWeek.weekStartDate} - {thisWeek.weekEndDate}</p>

      <div className="grid mt-10 grid-cols-1 md:grid-cols-3 sm:mt-10 md:mt-40 justify-center gap-5">
        <div className="w-full flex flex-col justify-center items-center border-b-4 border-blue-300 bg-white h-64">
          <div className="text-6xl text-right">{Math.ceil(metersToMiles(weekDistance)).toLocaleString()} mi</div>
          <div className="text-2xl text-left mt-5 font-light">DISTANCE</div>
        </div>
        <div className="flex flex-col justify-center items-center border-b-4 border-blue-300 bg-white h-64">
          <div className="text-6xl text-right">{formatHumanizeSeconds(weekDuration)}</div>
          <div className="text-2xl text-left font-light mt-5">TIME</div>
        </div>
        <div className="flex flex-col justify-center items-center border-b-4 border-blue-300 bg-white h-64">
          <div className="text-6xl text-right">{Math.ceil(metersToFeet(weekElevation)).toLocaleString()} ft</div>
          <div className="text-2xl text-lef font-light mt-5">ELEVATION</div>
        </div>
      </div>
    </div>
  )
}

export default Week
