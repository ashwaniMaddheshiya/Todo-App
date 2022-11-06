import React from 'react'
import './TodoItem.css';
import Button from '../UI/Button'

const TodoItem = (props) => {
  const removeClickHandler = () =>{
    props.onRemoveTask(props.id);
  }
  return (
    <li className='task-item'>
        {props.children}
        <Button style={{backGroundColor: 'black'}} onClick={removeClickHandler}>Del</Button>
    </li>
  )
}

export default TodoItem