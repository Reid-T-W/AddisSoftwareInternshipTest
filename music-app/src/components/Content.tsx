import React from 'react'
import { Sidebar } from './'
import { Flex } from 'rebass'

/**
 * Props for the Content component.
 * 
 * @interface
 */
interface BodyProps {
  Component: React.FC;
}
/**
 * Content component renders the Sidebar and one other component
 * passed to it via props
 * 
 * @prop {BodyProps} Component - Either the Songs, Albums,
 * Artists or Geners Component
 * 
 * @returns {JSX.Element} The rendered component
 */
export const Content:React.FC<BodyProps> = ({Component}) => {
  return (
    <Flex height={'100%'}>
        <Sidebar />
        <Component />
    </Flex>
  )
}

export default Content