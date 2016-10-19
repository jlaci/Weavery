import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {JobResultService} from "../../../domain/Job/job-result.service";
import {JobResult} from "../../../domain/Job/job-result";

@Component({
    selector: 'jobs',
    templateUrl: 'app/templates/Jobs/JobResults/job-results.html',
    providers: [JobResultService]
})

export class JobResults implements OnInit, OnDestroy{
    private sub: any;
    jobResults : JobResult[] = [];
    jobId : string;
    index : number;

    constructor(
        private jobResultService : JobResultService,
        private route : ActivatedRoute) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.jobId = params['jobId'];
            this.index = params['index'];
            this.jobResultService.getJobResult(this.jobId, this.index).then(result => this.jobResults = result);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}