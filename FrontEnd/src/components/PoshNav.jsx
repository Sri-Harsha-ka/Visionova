import React from 'react'
import NavItem from './innercomponents/NavItem'
import images from './innercomponents/asserts'
import { AiOutlineInfo } from "react-icons/ai";


const PoshNav = () => {

  const sectionRef = useRef(null)
  return (
    <div className='main-page bg-[#2E3B32] h-full rounded-t-[5rem] flex justify-evenly  pt-32 px-24 mt-[-10rem] '>
      <NavItem val={{image:images.biriyani , title:"HotStuff"}}  />
      <NavItem val={{image:images.vegBiriyani , title:"Offers"}}  />
      <NavItem val={{image:images.biriyani , title:"Filters"}}  />
      <NavItem val={{image:images.biriyani , title:"About Us"}}  />
    </div>
  )
}

export default PoshNav
