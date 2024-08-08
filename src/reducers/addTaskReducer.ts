import { ADD_TASK } from "../actions";
import { Action } from "../types/action";
import { Task } from "../types/task";

const initialState: Task[] = []

export const addTaskReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id: action.payload.id,
                    task: action.payload
                }
            ]
        default:
            return state
    }
}