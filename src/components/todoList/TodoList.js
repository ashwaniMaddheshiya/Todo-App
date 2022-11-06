import React from 'react'
import TodoItem from '../todoItem/TodoItem'
import './TodoList.css';

const TodoList = (props) => {
  const handleRemoveTask = (id) =>{
    // console.log(id);
    props.onDeleteTask(id);
    
  }
  return (
    <ul className='task-list'>
        {props.items.map(task => (
            <TodoItem 
            key={task.id}
            id={task.id}
            onRemoveTask={handleRemoveTask}
            >
              {task.text}
              </TodoItem>
        ))}
    </ul>
  )
}

export default TodoList