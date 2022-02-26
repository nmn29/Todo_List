import {React, useState} from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
} from '@chakra-ui/react'
import TodoList from './TodoList.js'
import View from './ViewTodo.js'

export default function Edit ({setView}){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [task, setTask] = useState('');

  const handleEditTask = (event) => {
    setTask( event.target.value )
    console.log(task)
  }

  const setSpace = () =>{
    setTask("")
    onClose()
  }
  
  const setEdit = () =>{
    if (task === "") {
      return
    }
    setView(task)
    setTask("")
    onClose()
  }


  return (
    <>
    
      <Button onClick={onOpen}>編集</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>編集</ModalHeader>
          
          <ModalCloseButton />
          <ModalBody>
            <Input 
              p={7} variant='outline' width="100%"  
              value = {task} 
              placeholder="タスクを入力してください(最大30文字)" 
              onChange={handleEditTask}
              maxlength="20"      
            />
          </ModalBody>

          <ModalFooter>
            <Button            
            colorScheme='blue' mr={3} 
            onClick={setEdit}
            >
              完了
            </Button>

            <Button variant='ghost' mr={3} 
            onClick={setSpace}
            >
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
