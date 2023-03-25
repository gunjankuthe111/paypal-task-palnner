import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

export const CreateTask = () => {
  return (
    <Flex h="80vh" justifyContent="center" alignItems="center">
      <Flex gap={10} fontSize="4xl">
        <Button
          colorScheme="purple"
          borderRadius="20px"
          p="30px"
        >
          Create Spint+
        </Button>
        <Button
          colorScheme="purple"
          borderRadius="20px"
          p="30px"
        >
          Create Task+
        </Button>
      </Flex>
    </Flex>
  );
}
