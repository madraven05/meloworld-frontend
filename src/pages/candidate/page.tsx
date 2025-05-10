import React from 'react'
import { Outlet } from 'react-router-dom'

const CandidatePage:React.FC = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default CandidatePage;