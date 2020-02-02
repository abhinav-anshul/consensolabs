import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";

import { deleteCard } from "../actions";

const TaskboardCard = ({ text, id, index, sample, cardId }) => {
  // handleClickDelete = () => {
  //   // const { dispatch } = this.props;
  //   // dispatch(deleteCard(cardId));
  //   console.log("clicked");
  // };

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
            </CardContent>
          </Card>
          {/* //delete added */}
          {/* <button
            onClick={(cardId, props, sample, dispatch ) => {
              //const { dispatch } = this.props;
              dispatch(deleteCard(cardId));
            }}
          >
            DELETE
          </button> */}
          {/* ////////////////////// */}
        </div>
      )}
    </Draggable>
  );
};

export default connect()(TaskboardCard);
