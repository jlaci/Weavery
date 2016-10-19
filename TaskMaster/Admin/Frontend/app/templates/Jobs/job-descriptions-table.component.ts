import {Component, OnInit, Input} from '@angular/core';
import {JobDescriptionService} from "../../domain/Job/job-description.service";
import {JobDescription} from "../../domain/Job/job-description";
import {JobState} from "../../domain/Job/job-state";

@Component({
    selector: 'job-descriptions-table',
    templateUrl: 'app/templates/Jobs/job-descriptions-table.html',
    providers: [JobDescriptionService]
})

export class JobDescriptionsTable implements OnInit{
    @Input() states: JobState[];

    jobDescriptions : JobDescription[] = [];

    constructor(private jobDescriptionService : JobDescriptionService) { }

    ngOnInit(): void {
        this.jobDescriptionService.getJobDescriptions(this.states).then(jobDescriptions => this.jobDescriptions = jobDescriptions);
    }
}