import React from 'react'


const NavItem = ({ val,onClick }) => {
  return (
    <div onClick={onClick} className='flex flex-col gap-4 justify-center items-center cursor-pointer'>
      <div className=" rounded-full flex justify-center items-center w-48 h-48 overflow-hidden ">
        <img src={val.image} className="  " alt="nav-ele" />
      </div>
      <span className='text-white font-mono px-8'>{val.title}</span>
    </div>
  )
}

export default NavItem
