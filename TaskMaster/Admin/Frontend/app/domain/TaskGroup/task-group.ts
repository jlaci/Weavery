export enum WorkingMode {
    Distributed,
    Hybrid,
    Centralised
}

export class TaskGroup {
    id: string;
    name: string;
    workingMode: WorkingMode;
    constructor(name: string, workingMode: WorkingMode) {
        this.name = name;
        this.workingMode = workingMode;
    }
}