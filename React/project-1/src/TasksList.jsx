import React, { useState } from "react";
import { useTasks, useTasksDispatch } from "./AppContext";

export const TasksList = () => {
  const tasks = useTasks();
  const dispatch = useTasksDispatch();
  const [editTaskId, setEditTaskId] = useState(-1);
  const [editText, setEditText] = useState('');

  const EditTask = (id, text) => {
    setEditTaskId(id);
    setEditText(text);
  };

  const SaveTask = (id, text) => {
    setEditTaskId(-1);
    dispatch({
        type: 'changed',
        task: {
            id: id, 
            text: text,
        }
    });
    setEditText('');
  };

  const DeleteTask = (id) => {
    dispatch({
        type: 'deleted',
        id: id,
    });
  };

  return (
    <div className="tasklist">
      <ul>
        {tasks.map((task) => {
          if (editTaskId !== task.id) {
            return (
              <div className="taskitem" key={task.id}>
                <li> {task.text} </li>
                <button disabled={editTaskId!==-1} onClick={() => EditTask(task.id, task.text)}>Edit</button>
                <button onClick={() => DeleteTask(task.id)}>Delete</button>
              </div>
            );
          } else {
            return (
              <div className="taskitem" key={task.id}>
                <li>
                  <input type="text" value={editText} onChange={(e)=>{setEditText(e.target.value)}}/> 
                </li>
                <button onClick={() => SaveTask(task.id, editText)}>Save</button>
                <button onClick={() => DeleteTask(task.id)}>Delete</button>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
};
