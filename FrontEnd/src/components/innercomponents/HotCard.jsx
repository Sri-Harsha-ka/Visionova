import React from 'react'

const HotCard = ({val}) => {
  return (
    <div className=' overflow-hidden rounded-2xl'>
      <div className='scale-100 hover:scale-105 transition-all ease-in-out delay-75'>
        <img src={val.image} alt="" style={{width:`${val.width}vw`,height:`${val.height}vw`}} /> 
      </div>
    </div>
  )
}

export default HotCard
