// src/App.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, editTask, toggleTask } from './redux/actions';
import './App.css';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
function App() {
  const [task, setTask] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(editTask(editId, task));
      setEditMode(false);
      setEditId(null);
    } else {
      const newTask = { id: Date.now(), text: task, completed: false };
      dispatch(addTask(newTask));
    }
    setTask('');
  };


  return (
    <div className="max-w-lg mx-auto p-4">
      
      <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>
      <TaskInput task={task} setTask={setTask} handleSubmit={handleSubmit} editMode={editMode}/>
      
      <TaskList task={task} setTask={setTask} editMode={editMode} setEditMode={setEditMode}  editId={editId} setEditId={setEditId} />
    </div>
  );
}

export default App;
