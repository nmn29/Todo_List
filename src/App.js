import './stylesheets/App.css';
import Header from './components/Header.js';
import TodoList from './components/TodoList.js';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
          <Header/>
          <TodoList/>      
      </ChakraProvider>
    </div>
  );
}

export default App;
