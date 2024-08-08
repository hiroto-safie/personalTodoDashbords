import { Task } from "../types/task"

export const ADD_TASK = 'ADD_TASK'

let nextId = 0;
export const addTask= (task: Task) => {
    return {
        type: ADD_TASK,
        Id: nextId++,
        payload: task
    }
}