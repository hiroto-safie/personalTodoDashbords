import { Action } from "../types/action";
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "../actions";
import { sampleTasks } from "../services/task";
import store from "../stores";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const initialState = {
    tasks: [
        ...sampleTasks,
    ],
    id: 1
}

export const rootReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {...action.payload, id: state.id}],
                id: state.id + 1
            }
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
        }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            }
        default:
            return state
    }
}

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { useAppDispatch, useAppSelector }
export type { RootState }