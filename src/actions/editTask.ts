import { Task } from "../types/task"

export const EDIT_TASK = 'EDIT_TASK'

export const editTask = (task: Task) => {
    return {
        type: EDIT_TASK,
        id: task.id,
        payload: task
    }
}