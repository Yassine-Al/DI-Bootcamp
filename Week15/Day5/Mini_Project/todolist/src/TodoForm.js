import React ,{useState} from "react" ;

const TodoForm = ({addTodo})=> {
    const [task , setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim()) {
            addTodo({
                id: Date.now(),
                task: task.trim(),
            });
            setTask("");
        };

        return (
            <form >
                <p>Add a new todo:</p>
                <br />
                <input type="text" />
            </form>
        )
    }
}


export default TodoForm