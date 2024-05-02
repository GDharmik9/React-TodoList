
import { Box } from '@mui/material'
import TodoInput from './components/TodoInput/TodoInput'
import TodoList from './components/TodoList'
import { useState, useEffect } from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

let id = 0;

const generateId = () => {
  ++id
  return id
}

function App() {

  const [todoValue, setTodoValue] = useState('')
  const [todos, setTodos] = useState<Todo[]>([]);

  const persistTodos = (newList: Todo[]) => {
    localStorage.setItem('todos', JSON.stringify(newList))
  }


  const handleAddTodo = (title: string) => {
    const newTodo = {
      id: generateId(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    persistTodos(newTodos)
    setTodos(newTodos)
  }

  const handleDeleteTodo = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    persistTodos(newTodos)
    setTodos(newTodos)
  }

  const editTodo = (id: number, title: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    })
    persistTodos(newTodos)
    setTodos(newTodos)
  }

  const handleCompleteTodo = (id: number) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    persistTodos(newTodos)
    setTodos(newTodos)
  }

  useEffect(() => {
    if (!localStorage) return;

    const localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    setTodos(JSON.parse(localTodos))

  }, [])


  return (
    <>
      <Box className="input-form-wrapper">
        <TodoInput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue} />
      </Box >
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} editTodo={editTodo} handleCompleteTodo={handleCompleteTodo} />
    </>
  )
}

export default App
