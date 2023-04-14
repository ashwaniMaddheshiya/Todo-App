import React, { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

const Home = () => {
  const [loadedtask, setLoadedTask] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchTasks = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:5000/api/todos/");
    const data = await response.json();
    setLoadedTask(data.todos);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onDragEnd = async (items) => {
    setLoadedTask(items);
    console.log(JSON.stringify(items))
    try {
      await fetch("http://localhost:5000/api/todos/updateOrder", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todos:items
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      <TodoForm fetchTasks={fetchTasks} />
      <div>
        {!isLoading && loadedtask && (
          <TodoList
            items={loadedtask}
            fetchTasks={fetchTasks}
            onDragEnd={onDragEnd}
          />
        )}
      </div>
    </>
  );
};

export default Home;
