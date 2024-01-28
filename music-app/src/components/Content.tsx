import React from 'react'
import '../App.css'
import { Songs, Sidebar } from './'
import { Flex } from 'rebass'

const Content = () => {
  return (
    // <div className='content-container'>
    <Flex>
        <Sidebar />
        <Songs />
    </Flex>
    // </div>
    
  )
}

export default Content