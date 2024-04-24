***1*** Create React App <br/>
***2*** Make TaskInput Component<br/>
***3*** Setup Redux<br/>
***4*** create store and provide that store to app<br/>
***5*** create a slice called toDoSlider.The initial state of slice is an empty array.<br/>
***6*** Then we define 2 reducers i.e addToDo and deleteToDo.<br/>
***7*** In addToDo reducer we store data along with the id<br/>
***8*** create  TaskList Component<br/>
***9*** In taskList Component we will render tha data into UI by maping Over the data stored in initialState of slice i.e. Array and use id as key.<br/>
***10*** for deletion of data we pass ID to the reducer to delete an item.<br/>
***11*** we use filter() method to filter out the item.<br/>
***12*** filter() creates a new array containing only the elements for which the provided function returns true.<br/>
***13*** Assigns the filtered array back to the todoList array of the Redux state.

