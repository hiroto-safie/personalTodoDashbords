import dayjs from "dayjs"
import { Task } from "../types/task"

const sampleTasks: Task[] = [
    {
        "id": 1,
        "name": "Complete project proposal",
        "description": "Write a detailed project proposal for the upcoming deadline",
        "dueDate": dayjs("2024-10-15"),
        priority: "High"
    },
    {
        "id": 2,
        "name": "Review code changes",
        "description": "Review and provide feedback on the latest code changes",
        "dueDate": dayjs("2024-10-20"),
        priority: "Low"
    },
    {
        "id": 3,
        "name": "Prepare presentation slides",
        "description": "Create visually appealing slides for the upcoming presentation",
        "dueDate": dayjs("2024-10-25"),
        priority: "Middle"
    },
    {
        "id": 4,
        "name": "Fix bug in login functionality",
        "description": "Investigate and fix the bug causing login issues",
        "dueDate": dayjs("2024-10-18"),
        priority: "Middle"
    },
    {
        "id": 5,
        "name": "Update documentation",
        "description": "Update the project documentation with the latest changes",
        "dueDate": dayjs("2024-10-30"),
        priority: "High"
    },
    {
        "id": 6,
        "name": "Test new feature",
        "description": "Perform thorough testing of the newly implemented feature",
        "dueDate": dayjs("2024-08-09"),
        priority: "High"
    },
    {
        "id": 7,
        "name": "Optimize database queries",
        "description": "Analyze and optimize the performance of database queries",
        "dueDate": dayjs("2024-08-10"),
        priority: "Low"
    },
    {
        "id": 8,
        "name": "Create user onboarding tutorial",
        "description": "Design and create a user onboarding tutorial for new users",
        "dueDate": dayjs("2024-08-11"),
        priority: "High"
    }
]

export const fetchTasks = async (): Promise<Task[] | undefined> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(sampleTasks)
        }, 100)
    })
}