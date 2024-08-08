import { DELETE_TASK } from "../actions"
import { Action } from "../types/action"
import { Task } from "../types/task"

const initialState: Task[] = []

export const deleteTaskReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case DELETE_TASK:
            return state.filter((task: Task) => task.id !== action.payload.id)
        default:
            return state
    }
}