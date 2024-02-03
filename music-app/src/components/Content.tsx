import React from 'react'
import '../App.css'
import { Sidebar } from './'
import { Flex } from 'rebass'

interface BodyProps {
  Component: React.FC;
}

const Content:React.FC<BodyProps> = ({Component}) => {
  return (
    <Flex>
        <Sidebar />
        <Component />
    </Flex>
  )
}

export default Content