import React, { useState } from 'react'

const TaskInput = () => {
    const[todo,setTodo]=useState("");

    const handleChange=(e)=>{
        setTodo(e.target.value);
    }
  //  console.log(todo)
  return (
    <div className='addTodos'>
    <input type="text" onChange={handleChange} className='todo-input' />

      <button className='add-btn'>Add bytton</button>
    </div>
  )
}

export default TaskInput
