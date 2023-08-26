
import { Draggable } from "react-beautiful-dnd";

const Card = ({ id, content, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => {
        return (
          <div
            className={"border-2 ml-3"}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {`${id} - ${content}`}
          </div>
        );
      }}
    </Draggable>
  );
};

export default Card;
