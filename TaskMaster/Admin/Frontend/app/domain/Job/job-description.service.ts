import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {JobDescription} from "./job-description";
import {api} from "../../app.config";

import 'rxjs/add/operator/toPromise';
import {JobState} from "./job-state";
import {ArrayParamAppender} from '../Util/ArrayParamAppender';


@Injectable()
export class JobDescriptionService {

    constructor(private http: Http) { }

    getJobDescriptions(states : JobState[]): Promise<JobDescription[]> {
        let params: URLSearchParams = new URLSearchParams();

        if(states != null) {
            ArrayParamAppender.appendArray(params, 'states', states);
        }

        return this.http.get(api.url + '/job', {search : params})
            .toPromise()
            .then(response => response.json() as JobDescription[])
            .catch(JobDescriptionService.handleError);
    }

    getJobDescription(jobId: string) {
        return this.http.get(api.url + '/job/' + jobId)
            .toPromise()
            .then(response => response.json() as JobDescription)
            .catch(JobDescriptionService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


}