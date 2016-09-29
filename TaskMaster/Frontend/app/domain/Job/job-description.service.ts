import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {JobDescription} from "./job-description";
import {api} from "../../app.config";

import 'rxjs/add/operator/toPromise';


@Injectable()
export class JobDescriptionService {

    constructor(private http: Http) { }

    getJobDescriptions(): Promise<JobDescription[]> {
        return this.http.get(api.url + '/job')
            .toPromise()
            .then(response => response.json() as JobDescription[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}