import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
import Card from "./UI/Card";

const TodoList = (props) => {
  const onDragEnd = (result) => {
    // If item dropped outside list
    if (!result.destination) {
      return;
    }
    const items = Array.from(props.items);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    props.onDragEnd(items);
  };

  return (
    <>
      <div className={styles.noData}>
        {props.items.length === 0 && (
          <Card>
            <h2>No Todos Found.</h2>
          </Card>
        )}
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul
              className={styles.ul}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {props.items.map((item, index) => (
                <Draggable key={item._id} draggableId={item._id} index={index}>
                  {(provided) => (
                    <div
                      className={styles.items}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <TodoItem
                        task={item.item}
                        id={item._id}
                        fetchTasks={props.fetchTasks}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default TodoList;
