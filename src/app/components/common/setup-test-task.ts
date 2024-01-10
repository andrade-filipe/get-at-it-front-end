import { Task } from "../../model/interfaces/task";

const TASKS : Task[] = [
    {
        "id": 1,
        "title": "Fazer Isso"
    },
    {
        "id": 2,
        "title": "E Aquilo Lá"
    },
    {
        "id": 3,
        "title": "E Mais Isso"
    }
]

export function setupTasks(): Task[] {
    return Object.values(TASKS) as Task[];
}
