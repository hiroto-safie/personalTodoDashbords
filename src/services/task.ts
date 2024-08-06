import { Task } from "../types/task"

export const fetchTasks = async (): Promise<Task[] | undefined> => {
    try {
        const response = await fetch("./tasks.json")
        console.log(response);
        const tasks = await response.json()
        return tasks
    } catch (error) {
        console.error(error)
    }

    return undefined; // Add a return statement at the end of the function
}