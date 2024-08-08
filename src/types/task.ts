import { Dayjs } from "dayjs"
import { Priority } from "./priority";
import { Status } from "./status";

export type Task = {
    id: number;
    name: string;
    priority: Priority;
    dueDate: Dayjs;
    description: string;
    status: Status
};