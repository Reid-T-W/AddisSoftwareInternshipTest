import React from 'react'
import { Navbar, Footer, Content } from './'
import { SongType } from '../models/models'
import {
  Flex,
} from "rebass"

/**
 * Props for the Body component.
 * 
 * @interface
 */
export interface BodyProps {
  Component: React.FC;
}
/**
 * Body Component, renders the Navbar and another component
 * passed to it via props
 * 
 * @component
 * 
 * @prop {BodyProps} Component - Either the Songs, Albums,
 * Artists or Geners Component
 *  
 * @returns {JSX.Element} The rendered component
 */
export const Body:React.FC<BodyProps> = ({Component}) => {
  return (
    <Flex flexDirection={'column'} backgroundColor={'#000'} height={'100vh'}>
        <Navbar />       
        <Content Component={Component}/>
    </Flex>
  )
}

export default Body