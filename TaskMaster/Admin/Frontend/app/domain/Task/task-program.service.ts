import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {api} from "../../app.config";

import 'rxjs/add/operator/toPromise';
import {TaskProgram} from "./task-program";


@Injectable()
export class TaskProgramService {

    constructor(private http: Http) { }

    getTaskProgram(taskId: string) {
        return this.http.get(api.url + '/task/' + taskId + '/program')
            .toPromise()
            .then(response => response.json() as TaskProgram)
            .catch(TaskProgramService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}