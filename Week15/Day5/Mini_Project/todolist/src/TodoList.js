import React ,{useState} from "react" ;
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
      <ul>
        {props.Tasks.map( task => {
            <li> <TodoItem Task={task} /> </li>
        })}
      </ul>
    );
}
  
export default TodoList;