import { Task } from "../types/task"

export const ADD_TASK = 'ADD_TASK'

export const addTask= (task: Task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}