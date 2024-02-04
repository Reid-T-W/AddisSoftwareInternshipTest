import React from 'react'
import { Navbar, Footer, Content } from './'
import { SongType } from '../models/models'
import {
  Flex,
} from "rebass"

interface BodyProps {
  Component: React.FC;
}

const Body:React.FC<BodyProps> = ({Component}) => {
  return (
    <Flex flexDirection={'column'} backgroundColor={'#000'} height={'100vh'}>
        <Navbar />       
        <Content Component={Component}/>
    </Flex>
  )
}

export default Body