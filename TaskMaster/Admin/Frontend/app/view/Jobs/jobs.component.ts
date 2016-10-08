import {Component, OnInit} from '@angular/core';
import {JobDescriptionService} from "../../domain/Job/job-description.service";
import {JobDescription} from "../../domain/Job/job-description";

@Component({
    selector: 'jobs',
    templateUrl: 'app/view/Jobs/jobs.html',
    providers: [JobDescriptionService]
})

export class Jobs implements OnInit{
    jobDescriptions : JobDescription[] = [];

    constructor(private jobDescriptionService : JobDescriptionService) { }

    ngOnInit(): void {
        this.jobDescriptionService.getJobDescriptions().then(jobDescriptions => this.jobDescriptions = jobDescriptions);
    }
}