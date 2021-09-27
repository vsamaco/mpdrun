import React from 'react'
import { metersToMiles } from '../utils/distance'

const Shoes = ({shoes}) => {
  const selectedShoes = [
    'Saucony Guide 13',
    'New Balance Fresh Foam 1080v10',
    'Saucony Endorphin Speed',
    'Puma Liberate Nitro',
    'Reebok FloatRide Energy 3'
  ].map(shoeName => {
    const shoe = shoes.find(s => s.name === shoeName);
    return shoe ? {...shoe, distance: Math.ceil(metersToMiles(shoe.distance))} : null;
  }).filter(x => x !== null);

  return (
    <div className="py-10 px-5 sm:py-20 sm:px-10 flex flex-col justify-center border-t-4 border-green-300">
      <h3 className="text-8xl flex flex-col justify-center font-light text-green-300">SHOES</h3>

      <ul className=" space-y-4 mt-20">
        {selectedShoes.map(shoe => (
          <li key={shoe.id} className="flex">
            <div className="flex-grow border-l-4 pl-4 py-4 border-green-300 bg-white">
              <div className="text-2xl sm:text-4xl font-light uppercase">{shoe.brand_name}</div>
              <div className="text-lg sm:text-2xl ">{shoe.model_name}</div>
            </div>
            <div className="flex-none text-2xl sm:text-5xl flex flex-col justify-center pr-5 font-light bg-white">
              {shoe.distance} mi
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Shoes
