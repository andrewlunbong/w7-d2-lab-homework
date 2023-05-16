import { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks ] = useState([
    {id: 1, name : "Buy Shopping"},
    {id: 2, name : "Clean Bathroom"},
    {id: 3, name : "Car's MOT"},
  
  ])
  const [newTask, setNewTask] = useState("")

  const completeTask = (taskId)=>{
    const newTasks = tasks.filter((task)=> task.id !== taskId)
    setTasks(newTasks)
  }
  
  const taskList = tasks.map((task)=>{
    return(
      <li key={task.id}>
       {task.name}
      <button onClick={()=>completeTask(task.id)}> Complete</button>
      </li>
    )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event)=>{
    event.preventDefault();

    const newTaskObj = {id: Date.now(), name: newTask}
    const nextTasks =  [...tasks, newTaskObj]
    setTasks(nextTasks)
    setNewTask("")
  }




  return (
    <div className="App">
      <h1> To Do List</h1>
      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'>Add a new task:</label>
        <input id='new-task' type='text' value={newTask} onChange={handleTaskInput}/>
        <input type='submit' value="Save New Task"/>
      </form>
      
      <ul>
        {taskList}
      </ul>
    
    </div>
  );
}

export default App;
