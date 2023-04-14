import React, { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const deleteItemHandler = async () => {
    try {
      await fetch(`http://localhost:5000/api/todos/${props.id}`, {
        method: "DELETE",
      });
      props.fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const checkBoxHandler = () => {
    setIsChecked(prevState => !prevState)
  }

  return (
    <Card>
      <div className={styles.container}>
        <div className={styles.check}>
          <input type="checkbox" name="" id="" isChecked={isChecked} onChange={checkBoxHandler} />
        </div>
        <div className={`{styles.task} ${isChecked ? styles.strike: ""}`}>{props.task}</div>
        <div className={styles.btn}>
          <Button onClick={deleteItemHandler}>Delete</Button>
        </div>
      </div>
    </Card>
  );
};

export default TodoItem;
