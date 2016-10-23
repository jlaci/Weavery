import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {api} from "../../app.config";

import 'rxjs/add/operator/toPromise';
import {TaskDataPart} from "./task-data-part";


@Injectable()
export class TaskDataPartService {

    constructor(private http: Http) { }

    getTaskDataParts(taskId: string): Promise<TaskDataPart[]> {
        return this.http.get(api.url + '/task/' + taskId + '/data')
            .toPromise()
            .then(response => response.json() as TaskDataPart[])
            .catch(TaskDataPartService.handleError);
    }

    getJobDataPart(taskId: string, index: number) {
        return this.http.get(api.url + '/task/' + taskId + '/data/' + index)
            .toPromise()
            .then(response => response.json() as TaskDataPart)
            .catch(TaskDataPartService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}