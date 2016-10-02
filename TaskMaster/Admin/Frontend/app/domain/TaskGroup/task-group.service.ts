import {Injectable} from "@angular/core";
import {TaskGroup} from "./task-group";
import {Http} from "@angular/http";
import {api} from "../../app.config";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskGroupService {

    constructor(private http: Http) { }

    getTaskGroup(): Promise<TaskGroup> {
        return this.http.get(api.url + '/taskgroup')
            .toPromise()
            .then(response => response.json() as TaskGroup)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}