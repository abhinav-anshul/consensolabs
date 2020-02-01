import React from "react";
import TaskboardCard from "./TaskboardCard";
import TaskboardActionButton from "./TaskboardActionButton";
import { Droppable } from "react-beautiful-dnd";

const TaskboardList = ({ title, cards, listID }) => {
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h3>{title}</h3>
          {cards.map((card, index) => (
            <TaskboardCard
              key={card.id}
              index={index}
              text={card.text}
              id={card.id}
            />
          ))}
          <TaskboardActionButton listID={listID} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "#eee",
    width: 300,
    padding: "0.5rem",
    marginRight: "1rem",
    height: "100%"
  }
};

export default TaskboardList;