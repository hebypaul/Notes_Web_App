import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

const DashBoard = () => {
  return (
    <div className="flex flex-1 flex-col h-screen bg-gradient-to-r from-white via-pink-50 to-violet-100  ">
      <div >
        <Header  />
      </div>
      <div>
      <Sidebar />
      </div>
    </div>
  )
}

export default DashBoard