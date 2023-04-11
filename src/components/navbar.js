import * as React from "react"
import {
  Flex,
  Button,
  Heading,
  Stack,
  useColorMode, 
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () =>{
  const { colorMode, toggleColorMode } = useColorMode();
 
  return (
    <>
      <Flex w='30%' alignItems={'center'} m={'50px auto 0'} justifyContent={'space-between'} >    
        <Heading>ToDo List</Heading>  
        <Flex alignItems={'center'} justifyContent={'space-between'}> 
            <Stack direction={'row'} spacing={7}>        
                <Button onClick={toggleColorMode} >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Stack>
        </Flex>
      </Flex>
    </>
  );
}


export default Navbar;