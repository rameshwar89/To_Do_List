import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between backdrop-blur-md bg-[rgba(0,0,0,0.19)]  text-white px-8 py-2 shadow-md">
        <div className="logo">
            <span className='font-bold' >
                iTask
            </span>
        </div>
        <ul className="flex justify-between gap-8">
            <li className='cursor-pointer hover:scale-110 transition-all duration-75'>Home</li>
            <li className='cursor-pointer hover:scale-110 transition-all duration-75'>Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar