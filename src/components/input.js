import * as React from "react"
import { useState } from "react";
import { Box, Input, Flex, useColorModeValue } from "@chakra-ui/react"
import { v4 as uuidv4 } from 'uuid';


const AgregarTarea=({lista, setLista, guardarEnLocalS})=>{

    const [tarea, setTarea] = useState('');
    
    const mostrarTarea=(e)=>{
        if(e.key === 'Enter') 
        {
            const nuevaLista = [...lista,{value: e.target.value, isCompleted: false, id:uuidv4()}]

            setLista(nuevaLista)
            setTarea('')
            guardarEnLocalS(nuevaLista)
        }
    }        
    
    return(
        <Flex align="center" justify="center" flexDirection="column"  boxShadow='md' p='8' rounded='md' borderColor={'white'} borderRadius={'8px'} m={'0 auto'} mt={6} w="sm"  bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('gray.600', 'white')}>
            <Box display="flex" w="100%" >
                <Input placeholder='Ingrese su tarea' onChange={(event)=> setTarea(event.target.value)} onKeyPress={mostrarTarea} value={tarea}/>
            </Box>
        </Flex>
        
        
    )


}
    

export default AgregarTarea;