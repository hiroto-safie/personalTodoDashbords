import { Action } from "../types/action";
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "../actions";
import { State } from "../types/state";
import { sampleTasks } from "../services/task";

const initialState: State = {
    tasks: [
        ...sampleTasks,
    ],
    nextId: 1
}

export const rootReducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {...action.payload, id: state.nextId}],
                nextId: state.nextId + 1
            }
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
        }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state
}}