import React from 'react'
import { Navbar, Footer, Content } from './'
import { SongType } from '../models/models'
import '../App.css'
import {
  Flex,
} from "rebass"

interface BodyProps {
  Component: React.FC;
}

const Body:React.FC<BodyProps> = ({Component}) => {
  return (
    <Flex flexDirection={'column'} backgroundColor={'#000'}>
        <Navbar />       
        <Content Component={Component}/>
        <Footer />
    </Flex>

    // </div>


  )
}

export default Body