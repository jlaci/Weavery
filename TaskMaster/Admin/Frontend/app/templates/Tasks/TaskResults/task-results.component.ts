import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TaskResultService} from "../../../domain/Task/task-result.service";
import {TaskResult} from "../../../domain/Task/task-result";

@Component({
    selector: 'task-results',
    templateUrl: 'app/templates/Tasks/TaskResults/task-results.html',
    providers: [TaskResultService]
})

export class TaskResults implements OnInit, OnDestroy{
    private sub: any;
    taskResults : TaskResult[] = [];
    taskId : string;
    index : number;

    constructor(
        private taskResultService : TaskResultService,
        private route : ActivatedRoute) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.taskId = params['taskId'];
            this.index = params['index'];
            this.taskResultService.getTaskResult(this.taskId, this.index).then(result => this.taskResults = result);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}