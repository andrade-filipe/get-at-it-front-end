import { Sprint } from "../../model/interfaces/sprint";

export const SPRINTS: Sprint[] = [
    {
        "id": 1,
        "title": "Fazer Isso - Sprint"
    },
    {
        "id": 2,
        "title": "E Aquilo Lá - Sprint"
    },
    {
        "id": 3,
        "title": "E Mais Isso - Sprint"
    }
];

export function setupSprints(): Sprint[]{
    return SPRINTS;
}
