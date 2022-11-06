import React,{useState} from 'react'
import Button from '../UI/Button'
import './TodoInput.css'

const TodoInput = (props) => {
    const [enteredTask, setEnteredTask] = useState("");
    const [isValid, setIsValid] = useState(true);
    

    const inputChangeHandler = (event) =>{
        if(event.target.value.trim().length > 0){
            setIsValid(true);
        }
        setEnteredTask(event.target.value);
    }

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        if(enteredTask.trim().length === 0){
            setIsValid(false);
            return;
        }
        props.onAddTask(enteredTask)
        setEnteredTask("")
    }



  return (
    <form onSubmit={formSubmitHandler}>
        <div className="form-control">
            <label style={{color:  !isValid ? 'red' : 'black'}}>Tasks</label>
            <input type="text" value={enteredTask} onChange={inputChangeHandler} style={{borderColor : !isValid ? 'red' : ''}}/>
        </div>
        <Button type="submit">Add Task</Button>
    </form>
  )
}

export default TodoInput