import React from 'react'
import { metersToMiles } from '../utils/distance'
import { parseShoeBrandModel } from '../utils/shoeBrand'

const Shoes = ({shoes}) => {
  const selectedShoes = [
    'Saucony Ride 15',
    'Saucony Triumph 19',
    'Brooks Glycerin 20',
    'adidas Adizero Pro 3'
  ].map(shoeName => {
    const shoe = shoes.find(s => s.name === shoeName);
    if (shoe) {
      const {brand: brand_name, model: model_name} = parseShoeBrandModel(shoe.name);
      return {...shoe, brand_name, model_name, distance: Math.ceil(metersToMiles(shoe.distance))};
    }
    return null;
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
