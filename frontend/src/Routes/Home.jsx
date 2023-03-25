import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {Login} from "../Components/Login";
import {Signup} from "../Components/Signup";

export const Home = () => {
  return (
    <Container
      backgroundImage="url(https://images.unsplash.com/photo-1550522667-09c9bdb293a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VlfGVufDB8fDB8fA%3D%3D&w=1000&q=80)"
      backgroundAttachment="fixed"
      backgroundSize="cover"
      pt="10%"
      h="100vh"
      maxW="full"
      centerContent
    >
      <Box
        bg="white"
        p="30px"
        w="450px"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Text textAlign="center" fontWeight="bold" fontSize="4xl">
          Task Planner
        </Text>
        <Tabs mt="20px" variant="soft-rounded" colorScheme="blue">
          <TabList>
            <Tab w="50%">Login</Tab>
            <Tab w="50%">Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
