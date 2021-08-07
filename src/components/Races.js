import React from 'react'

const Races = () => {
  return (
    <div className="py-10 px-5 sm:py-20 sm:px-10 flex flex-col justify-center border-t-4 border-red-400">
      <h2 className="text-8xl font-light uppercase text-red-400">Races</h2>
      <div className="mt-20 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-end">
        <div className="bg-white border-red-400 border-b-4 px-10 py-20 w-full sm:w-72">
          <div className="text-5xl">San Francisco Marathon</div>
          <div className="text-lg mt-2">SEP.19.2021</div>
          <div className="text-right text-6xl mt-20 font-light">26.2</div>
        </div>
        <div className="bg-white border-red-400 border-b-4 px-10 py-20 w-full sm:w-72">
          <div className="text-5xl">Berkeley Half Marathon</div>
          <div className="text-lg mt-2">FEB.27.2022</div>
          <div className="text-right text-6xl mt-20 font-light">13.1</div>
        </div>
      </div>
    </div>
  )
}

export default Races
