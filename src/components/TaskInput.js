import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../Reducers/toDoSlider';

const TaskInput = () => {
   const dispatch = useDispatch();
   const [content, setContent] = useState('');

   const handleChange = (e) => {
       setContent(e.target.value);
   }

   const add = () => {
    if (content === '') {
        return;  
    }
    
    dispatch(addToDo({ newContent: content }));
    setContent('');  
   }

  return (
    <div className='form'>
      <h2>What's your plan for today</h2>
      <input type='text' value={content} name='content' onChange={handleChange} />
      <button type='button' className='button' onClick={add}>Add</button>
    </div>
  );
};

export default TaskInput;
