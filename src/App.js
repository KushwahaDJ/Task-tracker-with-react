import { useState } from "react";
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      day: "Feb 5th at 2:30PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Master appointment",
      day: "Feb 6th at 2:30PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Writer appointment",
      day: "Feb 7th at 2:30PM",
      reminder: true,
    },
  ]);

  // Add task here
  const addTask = (task) => {
    // console.log("this is task" , task);
    const id = Math.floor(Math.random()*1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
  }

  // delete the task from the task list

  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter(task => task.id !== id ))
  }

  const toggleReminder =(id) => {
    // console.log('toggleReminder', id)
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder} : task
    ))
  }

  return (
    <div className="container">
    <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {showAddTask && <AddTasks onAdd={addTask}/>}
    {tasks.length > 0 ?  (<Tasks tasks={tasks} toggleReminder={toggleReminder} onDelete={deleteTask}/>): ('There is no more task to display')}
    </div>
  );
}

export default App;
