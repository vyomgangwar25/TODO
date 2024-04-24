import { createSlice } from '@reduxjs/toolkit'

export const toDoSlider = createSlice({
  name: 'toDo',
  initialState: {
    todoList:   []
  },
  reducers: {
    addToDo: (state, action) => {
        let newTodoList = {   
            id: Math.random(),
            content: action.payload.newContent
        }
        state.todoList.push(newTodoList);
    },
    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    
  },
})
 
export const { addToDo, deleteToDo } = toDoSlider.actions

export default toDoSlider.reducer;