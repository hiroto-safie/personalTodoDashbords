import { Task } from "./task";

export type State = {
    tasks: Task[];
    nextId: number;
}