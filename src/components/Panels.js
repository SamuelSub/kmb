import React from 'react'
import RotateObject from './RotateObject'
import MoveObject from './MoveObject'
import { Box, Heading, Flex } from '@chakra-ui/react'

const Panels = () => {
  return (
      <Flex direction='column' gap={5} p='24px' bg='#5B6057' h='100vh'>
        <Heading size='lg'>Panels</Heading>
        <RotateObject />
        <MoveObject />
      </Flex>
  )
}

export default Panels