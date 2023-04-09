import * as React from "react"
import { Flex, Button } from "@chakra-ui/react";

const Boton = () =>{

  return(
      <Flex align="center" justify="center">
              <Button m={2} >Todos</Button>
              <Button m={2} >Completas</Button>
              <Button m={2}>Incompletas</Button>
      </Flex>  
      )
}

export default Boton;