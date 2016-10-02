import {Component, OnInit} from '@angular/core';
import {TaskGroup, WorkingMode} from "../../domain/TaskGroup/task-group";
import {TaskGroupService} from "../../domain/TaskGroup/task-group.service";


@Component({
    selector: 'control-panel',
    templateUrl: 'app/view/ControlPanel/control-panel.html',
    providers: [TaskGroupService]
})

export class ControlPanel implements OnInit{
    taskGroup : TaskGroup = new TaskGroup('', WorkingMode.Centralised);

    constructor(private taskGroupService : TaskGroupService) { }

    ngOnInit(): void {
       this.taskGroupService.getTaskGroup().then(taskGroup => this.taskGroup = taskGroup);
    }
}