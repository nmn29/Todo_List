import {Input, Button, Box, Center, Heading, Flex, Spacer, Checkbox} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import '.././stylesheets/TodoList.css';
import { motion } from 'framer-motion';
import CurrentDate from './CurrentDate.js';
import View from './ViewTodo.js'
import Edit from './Edit.js'


export default function TodoList(props){

  const[todos, setTodo] = useState([]);
  const[task, setTask] = useState('');

  const handleNewTask = (event) => {
    setTask( event.target.value )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(task === '') return
    setTodo(todos => [...todos,{ task, isCompleted: false}])
    setTask('')
  }

  const DeleteTodo = (index) => { 
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodo(newTodos)
  }

  const [checkedItems, setCheckedItems] = useState(true)

  const Check = (event) => {
    setCheckedItems(event.target.checked)
  }

  return(
    <>
      
      <form onSubmit={ handleSubmit }>

      <Box>     
        <Input 
        p={7} variant='outline' width="50%"
        
        value = {task} 
        placeholder="タスクを入力してください(最大20文字)" 
        onChange={handleNewTask}
        maxlength="20"        
        />
      </Box>

      </form>

      <Center h='100%'>

        <ul>

          { todos.map((todo, index) => {   
          return(      
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x:0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >

          <Box 
            boxShadow='dark-lg' 
            p='2'         
            my='6' 
            rounded='md'          
            bg='white' 
            width='880px'
          >       

          <li key = {index}>
            <Flex bg='#ffffe7'>
              <Spacer />
                <Heading as='h2' fontSize='13px' isTruncated my='2' px='2'>
                  <CurrentDate />                 
                </Heading>                 
            </Flex>
            
            <Flex>
              <Box fontSize='30px' px='4'>
                <View view={todo.task}/>               
              </Box>
              <Spacer />  
                <p>
                <Button my="2" onClick={() => DeleteTodo(index)}                           
                colorScheme="red"
                >削除
                </Button>

                <Box size="md" px="5">
                <Checkbox
                size='lg' 
                colorScheme='green'
                onChange={Check}
                >
                完了
                </Checkbox>
                </Box>
                </p>
            </Flex>
          
          </li>
          
          </Box>    
          </motion.div>  
          )   
        })}
          
        </ul>        
      </Center>
      
    </>
  )
}

