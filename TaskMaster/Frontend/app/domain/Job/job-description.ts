export enum JobState {
    New,
    Active,
    Finished
}

export class JobDescription {
    jobId : string;
    size : number;
    issuer : string;
    createdDate : Date;
    state : JobState;
}