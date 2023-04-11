import * as React from "react"
import { Flex, Button } from "@chakra-ui/react";

const FuncionBoton = ( {filtros}) =>{

  return(
      <Flex align="center" justify="center">
              <Button onClick={() => filtros('todos')} m={2} >Todos</Button>
              <Button onClick={() => filtros('completos')}  m={2} >Completas</Button>
              <Button onClick={() => filtros('incompletos')} m={2}>Incompletas</Button>
      </Flex>
    
  )
}

export default FuncionBoton;