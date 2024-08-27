import { useState } from "react";

/* eslint-disable react/prop-types */

import style from './Form.module.css'
export default function Form({todos,setTodos}){
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name:"",done:false});


    function handleSubmit(e) {
        e.preventDefault();

        if(todo.name.trim() === ""){
          alert("Please Enter a To-Do Item ...")
          return
        }
        setTodos([todo,...todos]);
        setTodo({name:"",done:false});
      }
    
    return(
        <form className={style.todoform} onSubmit={handleSubmit}>
          <div className={style.inputcontainer}>
          <input className={style.input}
          onChange={(e) => setTodo({name:e.target.value,done:false})}
          value={todo.name}
          type="text" placeholder="Enter the To-Do item..."
        ></input>
        <button className={style.button} type="submit" >➕</button>
          </div>
        
      </form>
    )
}