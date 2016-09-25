import { Component } from '@angular/core';
import {TaskGroup} from "../../domain/TaskGroup/task-group";
import {TaskGroupService} from "../../domain/TaskGroup/task-group.service";


@Component({
    selector: 'control-panel',
    templateUrl: 'app/view/ControlPanel/control-panel.html',
    providers: [TaskGroupService]
})

export class ControlPanel {
    constructor(private taskGroupService : TaskGroupService) { }
    taskGroup : TaskGroup = this.taskGroupService.getTaskGroup();
}