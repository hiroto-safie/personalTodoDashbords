import { Dayjs } from "dayjs"

export type Task = {
    id: number;
    name: string;
    priority: string;
    dueDate: Dayjs;
    description: string;
};