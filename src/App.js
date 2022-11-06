import React,{useState} from 'react'
import './App.css'
import TodoInput from './components/todoInput/TodoInput'
import TodoList from './components/todoList/TodoList'

const INTIAl_STATE = [
  {text: "Do all Workout", id:'t1'},
  {text: "Do breakfast", id:'t2'}

]


const App = () => {
  const [tasks,setTasks] = useState(INTIAl_STATE);

  const addTaskHandler = (enteredTask) =>{
    setTasks(prevTask => {
      const updateTask = [...prevTask];
      updateTask.unshift({text:enteredTask, id:Math.random().toString()})
      return updateTask;
    })
  }

  const deleteTaskHandler = (taskId) =>{
    console.log(taskId)
    setTasks(prevTask =>{
      const updateTask = prevTask.filter(task => task.id !== taskId);
      return updateTask;
    })
  }

  let content = (<p style={{textAlign: 'center'}}>No Task Found. Maybe Add one?</p>)
 
  
  if(tasks.length > 0){
    content = (<TodoList items={tasks} onDeleteTask={deleteTaskHandler}/>)
    // return content;
  }

  return (
    <div>
    <section id='task-form'>
      <TodoInput onAddTask={addTaskHandler} />
    </section>
    <section id='task'>
      {content}
    </section>

    </div>
  )
}

export default App