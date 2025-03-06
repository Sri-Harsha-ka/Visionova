import React from 'react'

const OfferCard = ({ val }) => {
    return (
        <div className={`h-96 rounded-xl`} style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${val.image})`,
            backgroundRepeat: `no-repeat`,
            width:`${val.width}%`
        }}>
            <div className='text-[#E3DAC9] font-bold text-4xl flex flex-col relative top-1/2 px-3'>
                <span>{val.off1}</span>
                <span className='pb-3'>{val.off2}</span>
                <hr className='h-1 mx-3 bg-white ' />
            </div>
            <div className='tracking-tighter font-mono text-[#E3DAC9] relative top-52 px-5'>
                <p>
                    {val.text}
                </p>
            </div>
        </div>
    )
}

export default OfferCard
