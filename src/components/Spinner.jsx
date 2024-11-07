'use client'
import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
        <div className='custom-loader'></div>
        <div>Loading prev data..</div>
    </div>
    
  )
}

export default Spinner
