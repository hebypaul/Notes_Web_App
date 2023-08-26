import {useState }from "react";
import Layout from "../Components/Layout/Layout";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const data = [
  { id: 'task-1', content: 'Task 1' },
  { id: 'task-2', content: 'Task 2' },
  { id: 'task-3', content: 'Task 3' },
  { id: 'task-4', content: 'Task 4' },
];

const columnsData = {
  'column-1': {
    id: 'column-1',
    title: 'To Do',
    tasks: [data[0], data[1]],
  },
  'column-2': {
    id: 'column-2',
    title: 'In Progress',
    tasks: [data[2]],
  },
  'column-3': {
    id: 'column-3',
    title: 'Done',
    tasks: [data[3]],
  },
};

const Project = () => {
    const [columns, setColumns] = useState(columnsData);

    const onDragEnd = (result) => {
      const { destination, source, draggableId } = result;
  
      if (!destination) return;
  
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      )
        return;
  
      const startColumn = columns[source.droppableId];
      const endColumn = columns[destination.droppableId];
  
      if (startColumn === endColumn) {
        const newTasks = Array.from(startColumn.tasks);
        newTasks.splice(source.index, 1);
        newTasks.splice(destination.index, 0, startColumn.tasks[source.index]);
  
        const newColumn = {
          ...startColumn,
          tasks: newTasks,
        };
  
        setColumns({
          ...columns,
          [newColumn.id]: newColumn,
        });
      } else {
        const startTasks = Array.from(startColumn.tasks);
        startTasks.splice(source.index, 1);
        const newStartColumn = {
          ...startColumn,
          tasks: startTasks,
        };
  
        const endTasks = Array.from(endColumn.tasks);
        endTasks.splice(destination.index, 0, startColumn.tasks[source.index]);
        const newEndColumn = {
          ...endColumn,
          tasks: endTasks,
        };
  
        setColumns({
          ...columns,
          [newStartColumn.id]: newStartColumn,
          [newEndColumn.id]: newEndColumn,
        });
      }
    };
  
  return (
    <Layout>
        <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Project Board</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex justify-center">
          {Object.values(columns).map((column) => (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="border rounded p-4 m-2 w-64"
                >
                  <h2 className="text-lg font-semibold mb-2">{column.title}</h2>
                  {column.tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white border rounded p-2 mt-2"
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
    </Layout>
  );
};

export default Project;
