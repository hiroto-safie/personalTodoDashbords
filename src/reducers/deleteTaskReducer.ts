import { DELETE_TASK } from "../actions"
import { Action } from "../types/action"
import { State } from "../types/state"

const initialState: State = {
    tasks: [],
    nextId: 1
}

export const deleteTaskReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state
    }
}