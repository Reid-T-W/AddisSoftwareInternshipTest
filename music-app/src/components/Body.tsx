import React from 'react'
import { Navbar, Footer, Content } from './'
import '../App.css'
import {
  Flex,
} from "rebass"

const Body = () => {
  return (
    // <div className='body'>
    <Flex flexDirection={'column'} backgroundColor={'#000'}>
        <Navbar />       
        <Content />
        <Footer />
    </Flex>

    // </div>


  )
}

export default Body