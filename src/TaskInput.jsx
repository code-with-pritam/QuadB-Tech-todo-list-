import React from "react";
import { useDispatch } from "react-redux";

const TaskInput = ({task,setTask,handleSubmit,editMode}) => {
   console.log(task)
  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6 flex justify-center ">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
          required
          className="border p-2 rounded  mx-auto mb-4 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className=" bg-blue-500 text-white px-4 py-0 h-12  rounded shadow-md hover:bg-blue-600 transition duration-300"
        >
          {editMode ? "Edit" : "Add"} Task
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
