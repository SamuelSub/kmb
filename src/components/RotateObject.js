import React, { useContext } from 'react'
import modelContext from '../context/ModelContext'
import { Box, Heading, Flex, Button } from '@chakra-ui/react'

const RotateObject = () => {

  const { setObjectRotationRight, setObjectRotationLeft, objectRotationLeft, objectRotationRight } = useContext(modelContext)

  const rotateObjectLeft = () => {
    setObjectRotationLeft(!objectRotationLeft)
  }

  const rotateObjectRight = () => {
    setObjectRotationRight(!objectRotationRight)
  }

  return (
    <Flex justifyContent='center' bg='#78C091' p='12px' borderRadius='2xl'>
      <Box>
        <Heading size='md' py={2}>Rotate</Heading>
        <Flex gap={5}>
          <Button onClick={() => rotateObjectLeft()} bg='#81F0E5'>Left</Button>
          <Button onClick={() => rotateObjectRight()} bg='#81F0E5'>Right</Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default RotateObject