import { Priority } from "./priority";
import { Status } from "./status";

export type Task = {
    id: number;
    name: string;
    priority: Priority;
    dueDate: string;
    description: string;
    status: Status
};