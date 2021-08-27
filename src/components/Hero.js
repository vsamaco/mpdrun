import React from 'react'
import dynamic from "next/dynamic";
import { weeklyActivities } from '../utils/weekNumber'

const MapWithNoSSR = dynamic(() => import("./ActivityMap"), {
  ssr: false
});

const Hero = ({activities}) => {
  const activity = activities[0];
  const weeks = weeklyActivities(activities);
  const { weekNumber } = weeks[0];

  return (
    <div className="py-10 px-5 sm:py-20 sm:px-10 flex flex-col justify-center">
      <h1 className="mt-40 sm:mt-40 text-5xl sm:text-8xl">milesperdonut</h1>
      <div className="text-4xl sm:text-6xl opacity-50 flex flex-col pb-32">
        <a href="#run" className="hover:underline text-yellow-400 uppercase">RUN</a>
        <a href="#week" className="hover:underline text-blue-400">WEEK</a>
        <a href="#shoes" className="hover:underline text-green-400">SHOES</a>
        <a href="#races" className="hover:underline text-red-400">RACES</a>
      </div>
    </div>
  )
}

export default Hero
