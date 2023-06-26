import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-2 px-8  border-b border-gray-200 shadow-md">
        <div>
        <button class="relative overflow-hidden  bg-white text-black py-2 px-4 rounded-full shadow-md hover:shadow-lg hover:bg-gray-900 border border-gray-300   hover:text-white ">
            T
        </button>
        </div> 
        <div className="flex items-center">
            <img src="/NoteLogo.svg" alt="Logo" className="h-10 mr-1 rounded-lg" />
            <span class="text-2xl font-bold bg-gradient-to-r from-pink-800 to-violet-700 bg-clip-text text-transparent font-mono"> Presume </span>
        </div>
        <div>
        <button class="relative overflow-hidden  bg-white text-black py-2 px-4 rounded-md shadow-md hover:shadow-lg hover:bg-gray-900 border border-gray-300   hover:text-white ">
            Theme
        </button>
        </div>
    </header>
  )
}

export default Header