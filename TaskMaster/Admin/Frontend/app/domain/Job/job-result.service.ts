import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {api} from "../../app.config";

import 'rxjs/add/operator/toPromise';
import {JobResult} from "./job-result";


@Injectable()
export class JobResultService {

    constructor(private http: Http) { }

    getJobResults(jobId: string): Promise<JobResult[]> {
        return this.http.get(api.url + '/job/' + jobId + '/result')
            .toPromise()
            .then(response => response.json() as JobResult[])
            .catch(JobResultService.handleError);
    }

    getJobResult(jobId: string, index: number) {
        return this.http.get(api.url + '/job/' + jobId + '/result/' + index)
            .toPromise()
            .then(response => response.json() as JobResult[])
            .catch(JobResultService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}