import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";

import { deleteCard } from "../actions";

const TaskboardCard = ({ text, id, index, dispatch, listID }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          className="taskboard_container"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card>
            <CardContent>
              <Typography style={{ fontSize: "1.5rem" }} gutterBottom>
                {text}
              </Typography>
              <button
                style={{
                  fontSize: "1.3rem",
                  outline: "none",
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                  cursor: "pointer",
                  paddingLeft: "0.8rem",
                  paddingRight: "0.8rem",
                  paddingTop: "0.2rem",
                  paddingBottom: "0.2rem",
                  textTransform: "uppercase"
                }}
                onClick={() => dispatch(deleteCard(listID, id))}
              >
                Delete
              </button>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default connect()(TaskboardCard);
