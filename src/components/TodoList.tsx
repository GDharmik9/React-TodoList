
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import EditNoteIcon from '@mui/icons-material/EditNote';
// import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/material/IconButton';
import TodoCard from './TodoCard';


interface TodoListProps {
    todos: {
        id: number;
        title: string;
        completed: boolean;
    }[];
    handleDeleteTodo: (id: number) => void;
}



const TodoList = (props: TodoListProps) => {
    const { todos } = props

    return (
        <>
            {todos.map((todo, index) => {
                return <TodoCard {...props} key={index} title={todo.title} id={todo.id} />
            })}
            {/* <List className='main'>
                {todos.map((todo, index) => (
                    <ListItem
                        key={index}
                        className="todoItem"
                        secondaryAction={
                            <>
                                <IconButton edge="end" aria-label="edit">
                                    <EditNoteIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        }
                    >
                        {todo.title}
                    </ListItem>

                ))}
            </List> */}
        </>
    );
};

export default TodoList