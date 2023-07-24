import React ,{useState} from "react" ;

const TodoItem = (props) => {
    return (
        <div>
            <p>{props.Task.task}</p>
        </div>
    )
}


export default TodoItem