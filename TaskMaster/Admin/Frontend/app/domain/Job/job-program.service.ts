import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {api} from "../../app.config";

import 'rxjs/add/operator/toPromise';
import {JobProgram} from "./job-program";


@Injectable()
export class JobProgramService {

    constructor(private http: Http) { }

    getJobProgram(jobId: string) {
        return this.http.get(api.url + '/job/' + jobId + '/program')
            .toPromise()
            .then(response => response.json() as JobProgram)
            .catch(JobProgramService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


}