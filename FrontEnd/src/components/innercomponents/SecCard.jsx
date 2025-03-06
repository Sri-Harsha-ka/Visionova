import React from 'react'
import FoodCard from './FoodCard'
import images from './asserts'
import Selector from './selector'
import { useState } from 'react'

const SecCard = ({ref}) => {

  const [selectedCategory, setSelectedCategory] = useState("all");

  // Food Items with category (veg, nonveg, egg)
  const foodItems = [
    { name: "Samosa", image: images.samosa, cal: 45, prize: 20, category: "veg" },
    { name: "Biriyani", image: images.biriyani, cal: 45, prize: 120, category: "nonveg" },
    { name: "Fries", image: images.fries, cal: 45, prize: 20, category: "veg" },
    { name: "Sandwich", image: images.sandwitch, cal: 109, prize: 68, category: "veg" },
    { name: "Veg Rice", image: images.vegCurry, cal: 80, prize: 110, category: "veg" },
    { name: "Chicken Noodles", image: images.chNoddles, cal: 45, prize: 120, category: "nonveg" },
    { name: "Choco Milk Shake", image: images.milkshake3, cal: 45, prize: 40, category: "egg" },
    { name: "Mal Milk shake", image: images.milkshake, cal: 109, prize: 68, category: "egg" },
  ];

  // Filter food items based on selectedCategory
  const filteredFoods = selectedCategory === "all"? foodItems: foodItems.filter((food) => food.category === selectedCategory);

  return (
    <div className='bg-[#2E3B32] px-24 pl-56 pb-24 flex flex-col gap-10'>
      <div className="flex justify-between px-10 ">
        <div ref={ref} className="flex justify-evenly " >
        
          <img src={images.vegLogo2} onClick={() => setSelectedCategory("veg")}  className='w-96 cursor-pointer' alt="" /> 
          <img src={images.nonVeg2} onClick={() => setSelectedCategory("nonveg")} className='w-96 cursor-pointer' alt="" /> 
          <img src={images.egg}  onClick={() => setSelectedCategory("egg")}  className='w-96 cursor-pointer' alt="" /> 
          <button className={`px-6 py-1 h-10 relative ml-14 top-[90px] rounded-lg ${selectedCategory === "all" ? "bg-green-600 text-white" : "bg-gray-200"}`} onClick={() => setSelectedCategory("all")}>
          All
        </button>
          
        </div>
        <div>
          {/* <span >Filter</span> */}
        </div>
      </div>
      {/* <div className="flex justify-evenly">
        <FoodCard food={{ name: "Samosa", image: images.samosa, cal: 45, prize: 20 }} />
        <FoodCard food={{ name: "Biriyani", image: images.biriyani, cal: 45, prize: 120 }} />
        <FoodCard food={{ name: "Fries", image: images.fries, cal: 45, prize: 20 }} />
        <FoodCard food={{ name: "Sandwitch", image: images.sandwitch, cal: 109, prize: 68 }} />
      </div>
      <div className="flex justify-evenly">
        <FoodCard food={{ name: "Veg Rice", image: images.vegCurry, cal: 80, prize: 110 }} />
        <FoodCard food={{ name: "Chicken Noodles", image: images.chNoddles, cal: 45, prize: 120 }} />
        <FoodCard food={{ name: "Choco Milk Shake", image: images.milkshake3, cal: 45, prize: 40 }} />
        <FoodCard food={{ name: "Mal Milk shake", image: images.milkshake, cal: 109, prize: 68 }} />
      </div> */}
      <div className="grid grid-cols-4  gap-8 justify-evenly">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food, index) => <FoodCard key={index} food={food} />)
        ) : (
          <p className="text-white text-center col-span-4">No items available</p>
        )}
      </div>
    </div>
  )
}

export default SecCard
