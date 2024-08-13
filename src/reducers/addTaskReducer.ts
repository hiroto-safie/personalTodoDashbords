import { ADD_TASK } from "../actions";
import { Action } from "../types/action";
import { State } from "../types/state";

const initialState: State = {
    tasks: [
        {
            "id": 0,
            "name": "Complete project proposal",
            "description": "Write a detailed project proposal for the upcoming deadline",
            "dueDate": "2024-10-15",
            "priority": "High",
            "status": "Completed"
        }
    ],
    nextId: 1
}

export const addTaskReducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case ADD_TASK:
            console.log("ADD_TASK");
            console.log(action);
            
            return {
                ...state,
                tasks: [...state.tasks, {...action.payload, id: state.nextId}],
                nextId: state.nextId + 1
            }
        default:
            return state
    }
}