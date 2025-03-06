import React from 'react'

const Selector = ({values}) => {
    return (
        <div className='flex py-2 pl-2 pr-5  bg-[#DAA520] rounded-lg'>
            <img src={values.image} alt={values.type} className='w-10 h-10' />
            <button className="text-[#E3DAC9] font-bold text-xl tracking-tighter">{values.type}</button>
        </div>
    );
}

export default Selector
