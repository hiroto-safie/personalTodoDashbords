import React, { createContext, ReactNode, useEffect, useReducer } from "react"
import { State } from "../types/state";
import { Action } from "../types/action";
import { fetchTasks } from "../services/task";

const initialState = {
    tasks: [],
    nextId: 1
};

export const TaskContext = createContext<{ state: State, dispatch: React.Dispatch<Action> }>({state: initialState, dispatch: () => null})

function taskReducer(state: State, action: Action) {
    switch (action.type) {
        case "SET_TASKS":
            return {
                ...state,
                tasks: action.payload
            }
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, {...action.payload, id: state.nextId}],
                nextId: state.nextId + 1
            }
        case "UPDATE_TASK":
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                )
            }
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state
    }
}

export const TaskContextProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [state, dispatch] = useReducer(taskReducer, initialState)

    useEffect(() => {
        const tasks = fetchTasks()
        dispatch({type: "SET_TASKS", payload: tasks})
    }, [])

    return(
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}