import React from 'react'
import dynamic from "next/dynamic";
import ElevationMap from './ElevationMap';
import { metersToMiles } from '../utils/distance'
import { formatDate, formatSeconds, formatTime } from '../utils/time'

function Activity({activity, gpx, labels}) {
  const MapWithNoSSR = dynamic(() => import("./ActivityMap"), {
    ssr: false
  });

  return (
    <div className="relative container">
      <div className="grid grid-cols-3 h-full">
        <div className=" col-span-2 overflow-hidden items-end relative opacity-50 h-80" id="map">
          <MapWithNoSSR />
        </div>
        <div className="flex items-center bg-red-300 text-4xl pl-10">
          <div>
            <p>D {metersToMiles(activity.distance)} mi</p>
            <p>T {formatSeconds(activity.moving_time)}</p>
            <p>E 1,957 ft</p>
          </div>
        </div>
        <div className="bg-blue-400 text-4xl flex text-center items-center h-60">
          1,957 ft
        </div>
        <div className="h-60 w-full col-span-2">
          <ElevationMap gpx={gpx} labels={labels}/>
        </div>
      </div>
      <div className="grid grid-cols-3 h-full">
        <div className="relative">
          <div id="map" className="hover:opacity-30">
            <MapWithNoSSR />
          </div>
          <div className="hidden hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="text-3xl">
              {metersToMiles(activity.distance)} miles
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="flex items-center hover:opacity-30 h-30">
            <ElevationMap gpx={gpx} labels={labels}/>
          </div>
          <div className="hidden hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="text-3xl">
              1,957 ft
            </span>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}


export default Activity
