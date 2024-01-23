import React, { useState } from 'react'
import { useTasks, useTasksDispatch } from './AppContext';

export const AddTasks = () => {
    
    const [taskText, setTaskText] = useState('');
    const tasks = useTasks();
    const dispatch = useTasksDispatch();

    const AddOnClick=(text)=>{
        const id = tasks.length+1;
        dispatch({
            type: 'added',
            id: id,
            text: text,
        });
        setTaskText('');
    }

  return (
    <div className='addtasks'>
        <input value={taskText} onChange={(e)=>{setTaskText(e.target.value)}} />
        <button onClick={(e)=>AddOnClick(taskText)} >Add</button>
    </div>
  )
}
