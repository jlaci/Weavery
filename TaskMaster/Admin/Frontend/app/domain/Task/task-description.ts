import {TaskState} from "./task-state";

export class TaskDescription {
    taskId : string;
    size : number;
    priority: number;
    issuer : string;
    createdDate : Date;
    state : TaskState;
}