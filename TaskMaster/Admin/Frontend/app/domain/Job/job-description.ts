import {JobState} from "./job-state";

export class JobDescription {
    jobId : string;
    size : number;
    issuer : string;
    createdDate : Date;
    state : JobState;
}