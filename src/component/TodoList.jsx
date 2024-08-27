import TodoItem from "./TodoItem";
import style from './ToDoList.module.css'
/* eslint-disable react/prop-types */

export default function TodoList({todos,setTodos}){
    return(
        <div className={style.list}>
        {todos.map((item,index) => (
        <TodoItem key={index} item = {item} todos={todos} setTodos={setTodos}/>
      ))}
        </div>
    )
}