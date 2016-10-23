import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {TaskDescription} from "./task-description";
import {api} from "../../app.config";

import 'rxjs/add/operator/toPromise';
import {TaskState} from "./task-state";
import {ArrayParamAppender} from '../Util/ArrayParamAppender';


@Injectable()
export class TaskDescriptionService {

    constructor(private http: Http) { }

    getTaskDescriptions(states : TaskState[]): Promise<TaskDescription[]> {
        let params: URLSearchParams = new URLSearchParams();

        if(states != null) {
            ArrayParamAppender.appendArray(params, 'states', states);
        }

        return this.http.get(api.url + '/task', {search : params})
            .toPromise()
            .then(response => response.json() as TaskDescription[])
            .catch(TaskDescriptionService.handleError);
    }

    getTaskDescription(taskId: string) {
        return this.http.get(api.url + '/task/' + taskId)
            .toPromise()
            .then(response => response.json() as TaskDescription)
            .catch(TaskDescriptionService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


}