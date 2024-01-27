import React from 'react'
import '../App.css'
import { Songs, Sidebar } from './'

const Content = () => {
  return (
    <div className='content-container'>
        <Sidebar />
        <Songs />
    </div>
    
  )
}

export default Content