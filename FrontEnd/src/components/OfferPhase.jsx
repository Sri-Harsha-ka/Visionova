import React from 'react'
import OfferCard from './innercomponents/OfferCard'
import images from "./innercomponents/asserts"

const OfferPhase = ({ref}) => {
  return (
    <div className='main-page bg-[#2E3B32] h-full rounded-t-[5rem]  pt-32 px-24 mt-[-10rem] '>
      <hr className='h-2 mt-14' />
      <div className='cursor-pointer w-full h-36 flex justify-center items-center mt-5 mb-8 text-white text-4xl font-bold tracking-wider'>
        <span>Offers</span>
      </div>
      <div ref={ref} className='bg-[#2E3B32]  pb-14 px-44 flex justify-evenly gap-20'>
        <OfferCard val={{ image: images.piza, off1: "Get Upto 200$", off2: "of Cashback", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, mollitia expedita distinctio magnam veritatis corporis libero atque asperiores sunt ad", width: 43 }} />
        <OfferCard val={{ image: images.shavarma, off1: "Get Upto 50$", off2: "of Cashback", text: "Lorem ipsum,dipisicing elit. Repellat, mollitia expedita distinctio magnam veritatis corporis libero atque asperiores sunt ad", width: 35 }} />
      </div>
      <div className='px-44  flex justify-evenly gap-10 pb-24 pl-10 '>
        <OfferCard val={{ image: images.vegCombo, width: 40, off1: "Veg Biriyani", off2: "Premium at 79$", text: "Lorem ipsum,dipisicing elit. Repellat, mollitia expedita distinctio magnam veritatis corporis libero atque asperiores sunt ad" }} />
        <div>
          <div className={`h-96 rounded-xl`} style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${images.milkshake})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize:`cover`,
            backgroundPosition:`center`,
            width: `150%`
          }}>
            <div className='text-[#E3DAC9] font-bold text-4xl flex flex-col relative top-1/2 px-3'>
              <span>MilkShake</span>
              <span className='pb-3'>At 29$</span>
              <hr className='h-1 mx-3 bg-white ' />
            </div>
            <div className='tracking-tighter font-mono text-[#E3DAC9] relative top-52 px-5'>
              <p>
                 reprehenderit quas atque quod velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferPhase
