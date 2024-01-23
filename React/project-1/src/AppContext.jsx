import React, { createContext, useContext, useEffect, useReducer } from 'react'

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export const AppContext = ({ children }) => {

    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    useEffect(() => {
      console.log(tasks);
    }, [tasks]);

  return (
    <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
            {children}
        </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export const useTasks=()=>{
    return useContext(TasksContext);
}

export const useTasksDispatch=()=>{
    return useContext(TasksDispatchContext);
}

const tasksReducer=(tasks, action)=>{
    if(action.type === 'added'){
        return [
            ...tasks,
            {
                id:action.id,
                text:action.text,
                done:false,
            },
        ];
    }
    else if(action.type==='changed'){
        return tasks.map((task)=>{
            if(task.id===action.task.id){
                return action.task;
            }
            else{
                return task;
            }
        })
    }
    else if(action.type==='deleted'){
        return tasks.filter((task)=>{
            return task.id!==action.id;
        })
    }
    else{
        throw Error('Unkown Action' + action.type);
    }
}

const initialTasks = [
    { id: 0, text: 'Philosophers Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
  ];