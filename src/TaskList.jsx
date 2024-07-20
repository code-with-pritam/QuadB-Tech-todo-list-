import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "./redux/actions";

const TaskList = ({task,setTask,editMode,setEditMode,editId,setEditId}) => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const handleEdit = (task) => {
        setTask(task.text);
        setEditMode(true);
        setEditId(task.id);
      };
  return (
    <div>
      <ul className="list-none p-0">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-4 mb-2 border rounded shadow-sm hover:shadow-lg transition duration-300"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
              className="mr-4 cursor-pointer"
            />
            <span
              className={`flex-grow cursor-pointer ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => dispatch(toggleTask(task.id))}
            >
              {task.text}
            </span>
            <button
              onClick={() => handleEdit(task)}
              className="bg-yellow-500 text-white px-3 py-1 rounded shadow-md hover:bg-yellow-600 transition duration-300 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="bg-red-500 text-white px-3 py-1 rounded shadow-md hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
