import React, { useState } from "react";
import styles from "./TodoForm.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button";

const TodoForm = (props) => {
  const [task, setTask] = useState("");
  const inputChangeHandler = (event) => {
    setTask(event.target.value);
  };

  const addItemHandler = async () => {
    if (task.trim() === "") {
      alert("Please fill the task first");
      return;
    }
    
    try {
      await fetch("http://localhost:5000/api/todos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: task }),
      });
      props.fetchTasks();
      setTask("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <Card>
        <form className={styles.form}>
          <label htmlFor="task">Task</label>
          <input type="text" onChange={inputChangeHandler} value={task} />
        </form>
        <div className={styles.btn}>
          <Button onClick={addItemHandler}>Add Task</Button>
        </div>
      </Card>
    </div>
  );
};

export default TodoForm;
