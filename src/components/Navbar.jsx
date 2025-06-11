import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-700 text-white px-8 py-2">
        <div className="logo">
            <span className='font-bold' >
                iTask
            </span>
        </div>
        <ul className="flex justify-between gap-8">
            <li className='cursor-pointer hover:font-bold transition-all duration-75'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-75'>Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar