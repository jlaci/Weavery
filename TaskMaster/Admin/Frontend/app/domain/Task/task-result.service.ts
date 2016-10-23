import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {api} from "../../app.config";

import 'rxjs/add/operator/toPromise';
import {TaskResult} from "./task-result";


@Injectable()
export class TaskResultService {

    constructor(private http: Http) { }

    getTaskResults(taskId: string): Promise<TaskResult[]> {
        return this.http.get(api.url + '/task/' + taskId + '/result')
            .toPromise()
            .then(response => response.json() as TaskResult[])
            .catch(TaskResultService.handleError);
    }

    getTaskResult(taskId: string, index: number) {
        return this.http.get(api.url + '/task/' + taskId + '/result/' + index)
            .toPromise()
            .then(response => response.json() as TaskResult[])
            .catch(TaskResultService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}