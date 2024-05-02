
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { useState } from 'react';

interface TodoCardProps {
    todos: {
        id: number;
        title: string;
        completed: boolean;
    }[],
    title: string,
    id: number,
    handleDeleteTodo: (id: number) => void;
    setTodoValue: (value: string) => void;
    editTodo: (id: number, title: string) => void;
    handleCompleteTodo: (id: number) => void;
}

const TodoCard = ({ todos, title, id, handleDeleteTodo, editTodo, handleCompleteTodo }: TodoCardProps) => {


    const [disabled, setDisabled] = useState(true)
    const checked = todos.find(todo => todo.id === id)?.completed
    const currId = todos.find(todo => todo.id === id)?.id

    const [todoUpdate, setTodoUpdate] = useState(title)

    return (
        <>
            <Card className="main">
                <CardHeader

                    className="card-header"
                    action={
                        <>
                            <Checkbox
                                disabled={disabled}
                                checked={checked}
                                onChange={() => { handleCompleteTodo(id) }}
                                inputProps={{ 'aria-label': 'task completed check ' }}
                            />
                            <IconButton aria-label="edit" onClick={() => { setDisabled(!disabled); editTodo(id, todoUpdate) }}>
                                {disabled ? <EditNoteIcon /> : <SaveAsIcon />}
                            </IconButton>
                            <IconButton aria-label="delete" onClick={() => handleDeleteTodo(currId ? currId : id)}>
                                <DeleteIcon />
                            </IconButton>
                        </>
                    }

                    title={<Input
                        className="card-input"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodoUpdate(e.target.value)}
                        value={todoUpdate}
                        disabled={disabled}
                    />}
                />

            </Card>
        </>
    )
}

export default TodoCard