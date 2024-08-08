import { EDIT_TASK } from "../actions"
import { Action } from "../types/action"
import { Task } from "../types/task"

const initialState: Task[] = []

export const editTaskReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case EDIT_TASK:
            return state.map(task => {
                if (task.id === action.payload.id) {
                    // NOTE: return action.payloadではダメなのか？
                    return {
                        ...task,
                        task: action.payload
                    }
                }
            })
        default:
            return state
    }
}
