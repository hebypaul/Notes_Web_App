import {useState }from "react";
import Layout from "../Components/Layout/Layout";
const initialColumns = [
    { id: 1, title: 'To Do' },
    { id: 2, title: 'In Progress' },
    { id: 3, title: 'Code Review' },
    { id: 4, title: 'Done' },
    { id: 5, title: 'Archive' }
  ];
  
  const initialTasks = [
    { id: 1, title: 'Task 1', columnId: 1 },
    { id: 2, title: 'Task 2', columnId: 1 },
    { id: 3, title: 'Task 3', columnId: 2 },
  ];

const Project = () => {
    const [columns, setColumns] = useState(initialColumns);
    const [tasks, setTasks] = useState(initialTasks);
    const [newColumnTitle, setNewColumnTitle] = useState('');
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskColumnId, setNewTaskColumnId] = useState(1);
  
    const handleAddColumn = () => {
      if (!newColumnTitle) return;
      setColumns((prevColumns) => [
        ...prevColumns,
        { id: prevColumns.length + 1, title: newColumnTitle }
      ]);
      setNewColumnTitle('');
    };
  
    const handleAddTask = () => {
      if (!newTaskTitle || !newTaskColumnId) return;
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: prevTasks.length + 1, title: newTaskTitle, columnId: newTaskColumnId }
      ]);
      setNewTaskTitle('');
      setNewTaskColumnId(1);
    };
  
    const handleMoveTask = (taskId, direction) => {
      setTasks((prevTasks) => {
        const taskIndex = prevTasks.findIndex((task) => task.id === taskId);
        const task = prevTasks[taskIndex];
        const newColumnId = task.columnId + direction;
        if (newColumnId < 1 || newColumnId > columns.length) return prevTasks;
        const newTasks = [...prevTasks];
        newTasks[taskIndex] = { ...task, columnId: newColumnId };
        return newTasks;
      });
    };
  return (
    <Layout>
        <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl mb-4">Kanban Board</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="New column title"
          value={newColumnTitle}
          onChange={(e) => setNewColumnTitle(e.target.value)}
          className="border rounded p-2 mr-2"
        />
        <button onClick={handleAddColumn} className="bg-green-500 text-white px-4 py-2 rounded">
          Add Column
        </button>
      </div>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="New task title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="border rounded p-2 mr-2"
        />
        <select
          value={newTaskColumnId}
          onChange={(e) => setNewTaskColumnId(Number(e.target.value))}
          className="border rounded p-2 mr-2"
        >
          {columns.map((column) => (
            <option key={column.id} value={column.id}>
              {column.title}
            </option>
          ))}
        </select>
        <button onClick={handleAddTask} className="bg-green-500 text-white px-4 py-2 rounded">
          Add Task
        </button>
      </div>
      <div className="flex">
        {columns.map((column) => (
          <div key={column.id} className="w-64 p-2 border rounded mr-2">
            <h2 className="text-xl font-bold mb-2">{column.title}</h2>
            {tasks
              .filter((task) => task.columnId === column.id)
              .map((task) => (
                <div key={task.id} className="p-2 border rounded mb-2">
                  <p>{task.title}</p>
                  <div className="flex justify-between">
                    <button
                      onClick={() => handleMoveTask(task.id, -1)}
                      disabled={column.id === 1}
                    >
                      ←
                    </button>
                    <button
                      onClick={() => handleMoveTask(task.id, 1)}
                      disabled={column.id === columns.length}
                    >
                      →
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Project;
