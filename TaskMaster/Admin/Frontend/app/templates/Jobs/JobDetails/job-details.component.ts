import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {JobDescriptionService} from "../../../domain/Job/job-description.service";
import {JobDescription} from "../../../domain/Job/job-description";
import {JobProgramService} from "../../../domain/Job/job-program.service";
import {JobProgram} from "../../../domain/Job/job-program";
import {JobState}from "../../../domain/Job/job-state";
import {JobDataPart} from "../../../domain/Job/job-data-part";
import {JobDataPartService} from "../../../domain/Job/job-data-part.service";
import {JobResultService} from "../../../domain/Job/job-result.service";

@Component({
    selector: 'job-details',
    templateUrl: 'app/templates/Jobs/JobDetails/job-details.html',
    providers: [JobDescriptionService, JobProgramService, JobDataPartService, JobResultService]
})

export class JobDetails implements OnInit, OnDestroy{
    jobDescription : JobDescription = new JobDescription();
    jobProgram : JobProgram = new JobProgram();
    jobDataParts : JobDataPart[] = [];
    jobResults : {} = {};

    JobState = JobState;

    private sub: any;

    constructor(
        private jobDescriptionService : JobDescriptionService,
        private jobProgramService : JobProgramService,
        private jobDataPartService : JobDataPartService,
        private jobResultService : JobResultService,
        private route : ActivatedRoute) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            var jobId : string = params['jobId'];
            this.jobDescriptionService.getJobDescription(jobId).then(result => this.jobDescription = result);
            this.jobProgramService.getJobProgram(jobId).then(result => this.jobProgram = result);
            this.jobDataPartService.getJobDataParts(jobId).then(result => this.jobDataParts = result);

            var self = this;
            this.jobResultService.getJobResults(jobId).then(function(results) {
                for(let result of results) {
                    if(self.jobResults[result.index] == null) {
                        self.jobResults[result.index] = [];
                    }
                    self.jobResults[result.index].push(result);
                }
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}