import React from 'react';
import classes from './todo.module.css';
import Button from '../button/Button';


const Todo = ({task, handleDelete, index,handleDone}) => {
    const todoClassName = task.completed ? 'completed-task' : '';

  return (
    <div className={classes.todo}>
        <p>{index+1} {task.task}</p>
      <Button action={()=>handleDone(task.id)} text={'Done'}/>
      <Button action={()=>handleDelete(task.id)} text={'Delete'}/>
        <span>{task.task}</span>
      <Button onClick={() => handleDelete(task.id)}>Delete</Button>
      <Button onClick={() => handleDone(task.id)}>Done</Button>
    </div>
  )
};

export default Todo;
