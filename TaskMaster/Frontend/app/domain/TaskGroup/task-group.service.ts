import {Injectable} from "@angular/core";
import {TaskGroup, WorkingMode} from "./task-group";

@Injectable()
export class TaskGroupService {
    getTaskGroup(): TaskGroup {
        return new TaskGroup('Test task group', WorkingMode.Hybrid);
    }
}