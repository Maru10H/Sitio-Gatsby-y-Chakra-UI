import * as React from "react"
import { useState } from "react";
import { Flex, Checkbox, Text, Button, Input} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { BsFillPencilFill } from 'react-icons/bs'


const Tareas=({item, handleToggleCompleted, handleOnClick, editOnClick})=>{
    const [text, setText] = useState(false)
    const [input, setInput] = useState(item.value);

    if(text){
        return (
            <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                if (e.key === "Enter") {
                  editOnClick(item.id, e.target.value)
                  setText(false);
                } 
                    
                
                }}
            />
        )
    }

    return (
        <Flex w="100%" mt={1} align="center" key={`item-${item.id}`} > 
        
          <Checkbox onChange={() => handleToggleCompleted(item.id)} mb={2} isChecked = {item.isCompleted} />
          
          <Text noOfLines={1} w="100%" style={{textDecoration: item.isCompleted ? 'line-through' : 'none',}} ml={2} > {item.value} </Text>
        
            <Flex>
                <Button size="sm" color={'green'} ml={4} mb={2} onClick={ () => setText(true) }> <BsFillPencilFill/> </Button>
                <Button size="sm" color={'red'} ml={4} mb={2} onClick={ () => handleOnClick(item) }> <DeleteIcon/> </Button>
            </Flex>
      </Flex> 
                
    )
    
}

export default Tareas