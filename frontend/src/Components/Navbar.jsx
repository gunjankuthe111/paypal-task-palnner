import { Box, Flex, Img } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const {pic,name} = useSelector(s=>s.auth)
  return (
    <Flex
      px="10%"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box w="200px">
        <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgqEM6fv0YFSRfbiQz-LC7b82YyMojjYlug&usqp=CAU" />
      </Box>
      <Flex gap="20px" justifyContent="space-between" alignItems="center">
        <Box>Hello, {name}</Box>
        <Box>
          <Img
            w="50px"
            h="50px"
            borderRadius="full"
            border="2px solid"
            src={pic}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
