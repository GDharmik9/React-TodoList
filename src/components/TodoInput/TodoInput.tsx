import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './TodoInput.css'

interface TodoInputProps {
    handleAddTodo: (title: string) => void,
    todoValue: string,
    setTodoValue: (value: string) => void
}

const TodoInput = (props:TodoInputProps) => {

    const { handleAddTodo, todoValue, setTodoValue } = props

    return (
        <Box
            className="todo-wapper"
            component="form"
            validate="true"
            autoComplete="off"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                handleAddTodo(todoValue)
                setTodoValue('')
            }}
        >
            <TextField
                className="todo-input"
                id="outlined-basic"
                label="Todo title"
                variant="outlined"
                value={todoValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodoValue(e.target.value)}
                required
            />
            <Button
                className="todo-button"
                variant="contained"
                type="submit"
            >
                Add
            </Button>
        </Box>
    )
}

export default TodoInput