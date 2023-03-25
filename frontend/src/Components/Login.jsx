import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { LoginData } from "../redux/auth/auth.actions";
import {useNavigate} from "react-router-dom"
export const Login = () => {
  const {isAuth} =  useSelector(s=>s.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [state, setState] = useState({email: "", password: ""});
  const [passVis, setPassVis] = useState(false);

  useEffect(()=>{
    if(isAuth)navigate("/task")
  },[isAuth,navigate])

  return (
    <VStack spacing="20px">
      <FormControl isRequired>
        <FormLabel>Email Addresss</FormLabel>
        <Input
          value={state.email}
          onChange={({target}) => setState({...state, email: target.value})}
          type="text"
          placeholder="Enter your email address here"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            value={state.password}
            onChange={({target}) =>
              setState({...state, password: target.value})
            }
            type={passVis ? "text" : "password"}
            placeholder="Enter your Password here"
          />
          <InputRightElement>
            <Button
              onClick={() => setPassVis(!passVis)}
              px="30px"
              variant="ghost"
              mr="40px"
            >
              Show
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        onClick={() => dispatch(LoginData(state))}
        w="full"
      >
        Login
      </Button>
      <Button
        colorScheme="blue"
        w="full"
        onClick={() => setState({email: "gk@gmail.com", password: "12345"})}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};
