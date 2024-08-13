import { Task } from "../types/task"

export const sampleTasks: Task[] = [
    {
        "id": 0,
        "name": "Complete project proposal",
        "description": "Write a detailed project proposal for the upcoming deadline",
        "dueDate": "2024-10-15",
        "priority": "High",
        "status": "Completed"
    },
    {
        "id": 1,
        "name": "Review code changes",
        "description": "Review and provide feedback on the latest code changes",
        "dueDate": "2024-10-20",
        "priority": "Low",
        "status": "Ongoing"
    },
    {
        "id": 2,
        "name": "Prepare presentation slides",
        "description": "Create visually appealing slides for the upcoming presentation",
        "dueDate": "2024-10-25",
        "priority": "Medium",
        "status": "Untouched"
    },
    {
        "id": 3,
        "name": "Fix bug in login functionality",
        "description": "Investigate and fix the bug causing login issues",
        "dueDate": "2024-10-18",
        "priority": "Medium",
        "status": "Completed"
    },
    {
        "id": 4,
        "name": "Update documentation",
        "description": "Update the project documentation with the latest changes",
        "dueDate": "2024-10-30",
        "priority": "High",
        "status": "Ongoing"
    },
    {
        "id": 5,
        "name": "Test new feature",
        "description": "Perform thorough testing of the newly implemented feature",
        "dueDate": "2024-08-09",
        "priority": "High",
        "status": "Untouched"
    },
    {
        "id": 6,
        "name": "Optimize database queries",
        "description": "Analyze and optimize the performance of database queries",
        "dueDate": "2024-08-10",
        "priority": "Low",
        "status": "Completed"
    },
    {
        "id": 7,
        "name": "Create user onboarding tutorial",
        "description": "Design and create a user onboarding tutorial for new users",
        "dueDate": "2024-08-11",
        "priority": "High",
        "status": "Ongoing"
    }
]

export const fetchTasks = async (): Promise<Task[] | undefined> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(sampleTasks)
        }, 100)
    })
}