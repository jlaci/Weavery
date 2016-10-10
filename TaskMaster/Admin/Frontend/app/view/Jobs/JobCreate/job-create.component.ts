import {Component, OnInit, OnDestroy} from '@angular/core';
import {JobDescriptionService} from "../../../domain/Job/job-description.service";
import {JobProgramService} from "../../../domain/Job/job-program.service";
import {JobDataPartService} from "../../../domain/Job/job-data-part.service";
import {JobResultService} from "../../../domain/Job/job-result.service";

@Component({
    selector: 'job-create',
    templateUrl: 'app/view/Jobs/JobCreate/job-create.html',
    providers: [JobDescriptionService, JobProgramService, JobDataPartService, JobResultService]
})

export class JobCreate {

}