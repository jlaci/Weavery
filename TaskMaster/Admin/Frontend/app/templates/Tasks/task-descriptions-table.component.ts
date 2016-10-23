import {Component, OnInit, Input} from '@angular/core';
import {TaskDescriptionService} from "../../domain/Task/task-description.service";
import {TaskDescription} from "../../domain/Task/task-description";
import {TaskState} from "../../domain/Task/task-state";

@Component({
    selector: 'task-descriptions-table',
    templateUrl: 'app/templates/Tasks/task-descriptions-table.html',
    providers: [TaskDescriptionService]
})

export class TaskDescriptionsTable implements OnInit{
    @Input() states: TaskState[];

    taskDescriptions : TaskDescription[] = [];

    constructor(private taskDescriptionService : TaskDescriptionService) { }

    ngOnInit(): void {
        this.taskDescriptionService.getTaskDescriptions(this.states).then(taskDescriptions => this.taskDescriptions = taskDescriptions);
    }
}