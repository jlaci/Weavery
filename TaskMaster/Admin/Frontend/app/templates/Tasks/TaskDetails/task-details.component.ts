import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TaskDescriptionService} from "../../../domain/Task/task-description.service";
import {TaskDescription} from "../../../domain/Task/task-description";
import {TaskProgramService} from "../../../domain/Task/task-program.service";
import {TaskProgram} from "../../../domain/Task/task-program";
import {TaskState}from "../../../domain/Task/task-state";
import {TaskDataPart} from "../../../domain/Task/task-data-part";
import {TaskDataPartService} from "../../../domain/Task/task-data-part.service";
import {TaskResultService} from "../../../domain/Task/task-result.service";

@Component({
    selector: 'job-details',
    templateUrl: 'app/templates/Tasks/TaskDetails/task-details.html',
    providers: [TaskDescriptionService, TaskProgramService, TaskDataPartService, TaskResultService]
})

export class TaskDetails implements OnInit, OnDestroy{
    taskDescription : TaskDescription = new TaskDescription();
    taskProgram : TaskProgram = new TaskProgram();
    taskDataParts : TaskDataPart[] = [];
    taskResults : {} = {};

    TaskState = TaskState;

    private sub: any;

    constructor(
        private taskDescriptionService : TaskDescriptionService,
        private taskProgramService : TaskProgramService,
        private taskDataPartService : TaskDataPartService,
        private taskResultService : TaskResultService,
        private route : ActivatedRoute) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            var taskId : string = params['taskId'];
            this.taskDescriptionService.getTaskDescription(taskId).then(result => this.taskDescription = result);
            this.taskProgramService.getTaskProgram(taskId).then(result => this.taskProgram = result);
            this.taskDataPartService.getTaskDataParts(taskId).then(result => this.taskDataParts = result);

            var self = this;
            this.taskResultService.getTaskResults(taskId).then(function(results) {
                for(let result of results) {
                    if(self.taskResults[result.index] == null) {
                        self.taskResults[result.index] = [];
                    }
                    self.taskResults[result.index].push(result);
                }
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}