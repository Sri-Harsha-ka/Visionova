import React from 'react'

const FoodCard = ({food}) => {
  return (
    <div className='p-12 w-80 h-96 rounded-xl overflow-hidden bg-[#4A5A48] '>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-42 overflow-hidden rounded-xl'>
            <img src={food.image} alt={food.name} className='w-44 h-40 rounded-xl' />
        </div>
        <div className='flex flex-col mb-3 pt-3 text-[#E3DAC9]'>
            <div>
                <span className=' font-semibold tracking-tighter '>Food:</span>
                <span className='font-medium'>   {food.name}</span>
            </div>
            <div>
                <span className='font-semibold tracking-tighter '>Prize:</span>
                <span className=' font-medium'>   {food.prize}</span>
            </div>
            <div>
                <span className=' font-semibold tracking-tighter '>Cal:</span>
                <span className=' font-semibold'>   {food.cal}</span>
            </div>
        </div>
        <button className='bg-[#DAA520] cursor-pointer pl-4 px-5 py-2 rounded-lg w-44 font-semibold text-[#E3DAC9] tracking-wide'>Add to Cart</button>
      </div>
    </div>
  )
}

export default FoodCard
