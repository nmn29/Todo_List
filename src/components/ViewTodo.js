import {Input, Button, Box, Center, Heading, Flex, Spacer } from '@chakra-ui/react';
import { useState } from "react";
import TodoList from './TodoList';
import Edit from './Edit.js';

export default function ViewTodo(props){
  const [view, setView] = useState(props.view)

  return(
    <Box width="760px" py="2" bg='#fdeef5' mx="-4" rounded='md' >
      <Flex mx='2'>
        {view}
      </Flex>
      <Flex>
        <Edit setView={setView}/>
      </Flex>
    </Box>
  )
}