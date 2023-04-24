import React from 'react'
import dynamic from "next/dynamic";
import { metersToMiles, metersToFeet } from '../utils/distance'
import { formatHumanizeSeconds } from '../utils/time'

const MapWithNoSSR = dynamic(() => import("./ActivityMap"), {
  ssr: false
});

const Run = ({activities}) => {
  const selectedActivityId = '8743095188';
  const activity = activities.find((activity) => activity.external_id === selectedActivityId) || activities[0];

  const top_stats = [
    {
      label: 'distance',
      value: `${metersToMiles(activity.distance).toLocaleString()} mi`,
    },
    {
      label: 'duration',
      value: formatHumanizeSeconds(activity.moving_time),
    },
    {
      label: 'elevation',
      value: `${Math.ceil(metersToFeet(activity.total_elevation_gain)).toLocaleString()} ft`,
    }
  ]

  return (
    <div className="py-10 px-5 sm:py-20 sm:px-10 flex flex-col justify-center border-t-4 border-yellow-300">
      <h3 className="font-light text-8xl uppercase text-yellow-300">Run</h3>
      <h4 className="text-5xl mt-3">{activity.name}</h4>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-10">
        <ul className="text-4xl lg:text-6xl mt-10 font-light flex flex-col justify-end space-y-5 sm:mt-5">
          {top_stats.map(stat => (
            <li className="border-l-4 border-yellow-300 pl-2" key={stat.label}>{stat.value}</li>
          ))}
        </ul>
        <div className="mt-10 sm:mt-5">
          <MapWithNoSSR activity={activity} />
        </div>
      </div>
    </div>
  )
}

export default Run
