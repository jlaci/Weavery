import {Component, OnInit} from '@angular/core';
import {TaskGroup, WorkingMode} from "../../domain/TaskGroup/task-group";
import {TaskGroupService} from "../../domain/TaskGroup/task-group.service";
import {JobState} from "../../domain/Job/job-state";


@Component({
    selector: 'control-panel',
    templateUrl: 'app/view/ControlPanel/control-panel.html',
    providers: [TaskGroupService]
})

export class ControlPanel implements OnInit{

    public JobState = JobState;

    taskGroup : TaskGroup = new TaskGroup('', WorkingMode.Centralised);

    constructor(private taskGroupService : TaskGroupService) { }

    ngOnInit(): void {
       this.taskGroupService.getTaskGroup().then(taskGroup => this.taskGroup = taskGroup);
    }
}