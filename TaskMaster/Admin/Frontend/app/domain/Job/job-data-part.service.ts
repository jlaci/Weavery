import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {api} from "../../app.config";

import 'rxjs/add/operator/toPromise';
import {JobDataPart} from "./job-data-part";


@Injectable()
export class JobDataPartService {

    constructor(private http: Http) { }

    getJobDataParts(jobId: string): Promise<JobDataPart[]> {
        return this.http.get(api.url + '/job/' + jobId + '/data')
            .toPromise()
            .then(response => response.json() as JobDataPart[])
            .catch(JobDataPartService.handleError);
    }

    getJobDataPart(jobId: string, index: number) {
        return this.http.get(api.url + '/job/' + jobId + '/data/' + index)
            .toPromise()
            .then(response => response.json() as JobDataPart)
            .catch(JobDataPartService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}