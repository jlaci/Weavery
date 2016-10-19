import {URLSearchParams} from "@angular/http";
export class ArrayParamAppender {

    static appendArray(params : URLSearchParams, key: string, array: any[]) {

        array.forEach((item, index) => {
            params.append(key + '[' + index + ']', item);
        });
    }

}