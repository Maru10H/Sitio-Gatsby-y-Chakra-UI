import * as React from "react"
import { useState } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import AgregarTarea from "../components/input";
import FuncionBoton from "../components/button";
import Tareas from "../components/tareas";
const Index = () => {

  //const listaInicial= JSON.parse(window.localStorage.getItem("tareas")) || []

  const [lista, setLista] =useState([]); //listaInicial
  let [filtro, setFiltro] = useState('todos');


 
  const handleOnClick = (item) =>{
    const nuevaTarea= lista.filter(itemLista =>{
      
      return itemLista.id !== item.id
    });

    setLista(nuevaTarea)
    //guardarEnLocalS(nuevaTarea)

  }

  const filtros = (filtrarElementos) =>{
    setFiltro(filtrarElementos);
  }

 

  const handleToggleCompleted = (id) =>{
    const newList = lista.map((item) => {
      if(item.id === id)
      {
        const updateItem = {
        ...item, isCompleted: !item.isCompleted,
        };
        return updateItem;
      }
      
      return item;
    })
  
    setLista(newList);
  
  }

  const editOnClick=(id, input)=>{
    
    setLista(
      lista.map((itemT) => {
          if (itemT.id === id) {
          return { ...itemT, value: input };
          }
          return itemT;
        })
    )
  }

  //const guardarEnLocalS=(tareas)=>{
  //  window.localStorage.setItem("tareas", JSON.stringify(tareas))    
  //}

  

  return (
    < >
      <Navbar/>
      <AgregarTarea lista={lista} setLista={setLista}/>
      <Flex align="center" justify="center" flexDirection="column" boxShadow='md' p='8' rounded='md' borderRadius={'8px'} m={'0 auto'} mt={4} w="sm"  bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('gray.600', 'white')}  borderColor={useColorModeValue('gray.200', 'gray.900')} > 
          <FuncionBoton filtros={filtros}/>
              
            {lista.filter((item) => {
              return (filtro === 'completos' && item.isCompleted) || (filtro === 'incompletos' && !item.isCompleted) || (filtro === 'todos')         
            }).map(item => {
                return (
                  <Tareas item={item} handleToggleCompleted={handleToggleCompleted} handleOnClick={handleOnClick} editOnClick={editOnClick} key={`item-${item.id}`}></Tareas>
                )})
            }                
          
        </Flex>
    </>
  )

};

export default Index
