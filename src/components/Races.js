import React from 'react'

const raceEvents = [
  {event_name: 'Oakland Marathon', event_date: 'MAR.19.2023', event_distance: 26.2},
  {event_name: 'San Francisco Marathon', event_date: 'JUL.23.2023', event_distance: 26.2},
  {event_name: 'Chicago Marathon', event_date: 'OCT.8.2023', event_distance: 26.2},
]

const Races = () => {
  return (
    <div className="py-10 px-5 sm:py-20 sm:px-10 flex flex-col justify-center border-t-4 border-red-400">
      <h2 className="text-8xl font-light uppercase text-red-400">Races</h2>
      <div className="mt-20 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-end">
        {raceEvents.map(({event_name, event_date, event_distance}, index) => {
          return (<div key={index} className="bg-white border-red-400 border-b-4 px-10 py-20 w-full sm:w-72 h-96 relative">
            <div className="text-5xl">{event_name}</div>
            <div className="text-lg mt-2">{event_date}</div>
            <div className="absolute bottom-10 text-right text-6xl mt-20 font-light">{event_distance}</div>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Races
