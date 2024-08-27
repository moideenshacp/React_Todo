/* eslint-disable react/prop-types */
import style from './todoitem.module.css'
import { useState } from 'react'
export default function TodoItem({ item ,todos,setTodos}) {

    const [isEditing,setisEditing] = useState(false)
    const [editValue,setEditValue]  = useState(item.name)
    
    function handleDelete(item){
        const confirm = window.confirm('Are You Sure Want To Delete This Item?..')
        if(confirm){
        const filteredTodo = todos.filter((todo)=>todo !== item)
        setTodos(filteredTodo)
        }
    }

    function handleClick(name){
        const newArr = todos.map((todo)=>todo.name === name ? {...todo,done :!todo.done} : todo)
        setTodos(newArr)
        console.log(newArr)
    }
    function handleEdit(){
        setisEditing(true)        
    }
    function handleSave(name){
        const newArr = todos.map((todo)=>todo.name ===name ? {...todo,name:editValue} : todo )
        setTodos(newArr)
        setisEditing(false)
        console.log(todos);
        
        console.log('hiii edit')
    }
    function handleCancel(){
        setEditValue(item.name)
        setisEditing(false)

    }
    const completedClass = item.done ? style.completed : ""
    return (
        <div className={style.item}>
            {isEditing ? (
                <div>
                    <input className={style.input}
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button className={style.delete} onClick={()=>handleCancel()}>Cancel</button>
                    <button  className={style.delete} onClick={()=>handleSave(item.name)}>Save</button>
                </div>
            ) : (
                <div className={style.itemName}>
                    <span className={completedClass} onClick={() => handleClick(item.name)}>
                        {item.name}
                    </span>
                    <span className={style.buttonContainer}>
                    <button onClick={()=>handleDelete(item)} className={style.delete} style={{ color: 'white' }}>🗑️</button>
                   <button onClick={()=>handleEdit()} className={style.edit}>✏️</button>
                    </span>
                </div>
            )}
            <hr className={style.line} />
        </div>
    );
}