import React from 'react';
import { menu_list } from '../assets/assets';
import FoodDisplay from './FoodDisplay';

const Explore = ({ category, setCategory }) => {
  return (
    <div className="my-6 px-4 sm:px-0">
      
      {/* Heading */}
      <div className="flex flex-col gap-4 sm:w-2/3">
        <h1 className="text-3xl sm:text-5xl font-semibold">
          Explore Menu
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum est quis alias perspiciatis maxime.
        </p>
      </div>

      {/* Category scroll list */}
      <div className="my-4 flex gap-5 items-center overflow-x-auto sm:overflow-x-hidden whitespace-nowrap scrollbar-hide snap-x snap-mandatory">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory(prev => (prev === item.menu_name ? 'All' : item.menu_name))
            }
            className="flex flex-col items-center gap-2 cursor-pointer snap-center"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`rounded-full object-cover w-16 h-16 sm:w-24 sm:h-24 transition-all ${
                category === item.menu_name
                  ? 'border-4 border-orange-500 p-1'
                  : ''
              }`}
            />
            <p className="text-sm sm:text-base">{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr className="border-none h-[2px] w-full bg-black my-4" />

      {/* Food List */}
      <FoodDisplay category={category} />
    </div>
  );
};

export default Explore;
