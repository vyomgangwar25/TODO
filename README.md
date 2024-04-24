Create React App 
Make TaskInput Component
Setup Redux
create store and provide that store to app
create a slice called toDoSlider.The initial state of slice is an empty array.
Then we define 2 rducers i.e addToDo and deleteToDo.
In addToDo reducer we store data along with the id
create  TaskList Component
In taskList Component we will render tha data into UI by maping Over the data stored in initialState of slice i.e. Array and use id as key.
for deletion of data we pass ID to the reducer to delete an item.
we use filter() method to filter out the item .
filter() creates a new array containing only the elements for which the provided function returns true.
Assigns the filtered array back to the todoList array of the Redux state.

