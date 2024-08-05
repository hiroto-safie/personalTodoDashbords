import React, { createContext, ReactNode, useReducer } from "react"

const initialState = {
    tasks: [],
    nextId: 1
};

export const TaskContext = createContext<{ state: any, dispatch: any }>({state: "", dispatch: () => null})

function taskReducer(state, action) {
    switch (action.type) {
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

    return(
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}