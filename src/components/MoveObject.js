import React, { useContext } from 'react'
import { Box, Heading, Flex, Button } from '@chakra-ui/react'
import modelContext from '../context/ModelContext'

const MoveObject = () => {

  const { setObjectMovementRight, setObjectMovementLeft, objectMovementLeft, objectMovementRight } = useContext(modelContext)

  const moveObjectLeft = () => {
    setObjectMovementLeft(!objectMovementLeft)
  }

  const moveObjectRight = () => {
    setObjectMovementRight(!objectMovementRight)
  }

  return (
    <Flex justifyContent='center' bg='#78C091' p='12px' borderRadius='2xl'>
      <Box>
        <Heading size='md' py={2}>Move</Heading>
        <Flex gap={5}>
          <Button onClick={() => moveObjectLeft()} bg='#81F0E5'>Left</Button>
          <Button onClick={() => moveObjectRight()} bg='#81F0E5'>Right</Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default MoveObject