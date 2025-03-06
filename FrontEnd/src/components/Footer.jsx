import React from 'react'
import images from './innercomponents/asserts'

const Footer = ({ref}) => {
  return (
    <div className='bg-[#2E3B32]'>
      <div className='bg-[#697A5D] px-24 py-14 w-full h-96 shadow-[1px_1px_16px_1px_rgba(0,0,0,0.2)] rounded-t-3xl'>
        <div ref={ref} className='flex gap-10'>
          <img src={images.logo} className='w-24' alt="" />
          <hr className='h-2 rounded-sm relative top-4 w-full ' />
        </div>

          <div className='bg-[#697A5D]'>
            <div className='flex justify-evenly gap-8 pb-10'>
              <div className='flex flex-col text-[#E3DAC9] text-2xl gap-4 font-serif'>
                <span className=''>Company</span>
                <span>About us</span>
                <span>Team</span>
                <span>Contact Us at </span>
                  <span>canteenconnects@gmail.com</span>
              </div>
              <div className='flex flex-col text-[#E3DAC9] text-2xl gap-4 font-serif'>
                <span>Partner With Us</span>
                <span>Help & Support</span>
              </div>
              <div className='flex flex-col text-[#E3DAC9] text-2xl gap-4 font-serif'>
                <span>Learn More</span>
                <span>Privacy</span>
                <span>Security</span>
                <span>Terms</span>
              </div>
              <div className='flex flex-col text-[#E3DAC9] text-2xl gap-4 font-serif'>
                <span>Socials</span>
                <span>Instagram</span>
                <span>Twitter</span>
                <span>YouTube</span>
                <span>FaceBook</span>
              </div>

            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer
