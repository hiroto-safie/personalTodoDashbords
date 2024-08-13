import { EDIT_TASK } from "../actions"
import { Action } from "../types/action"
import { State } from "../types/state"

const initialState: State = {
    tasks: [],
    nextId: 1
}

export const editTaskReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    // NOTE: return action.payloadではダメなのか？
                    return {
                        ...task,
                        task: action.payload
                    }
                }
            })
        }
        default:
            return state
    }
}
