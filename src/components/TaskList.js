import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo } from '../Reducers/toDoSlider';

const TaskList = () => {
  
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className='todos'>
        {todoList.map(({ id, content }) => (
          <li className='grid' key={id}>
            <span className='content'>{content}</span>
            <span className='todo-action'>
              <AiOutlineCloseCircle className="close" onClick={() => dispatch(deleteToDo({ id }))}/>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
