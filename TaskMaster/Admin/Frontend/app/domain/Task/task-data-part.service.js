"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_config_1 = require("../../app.config");
require('rxjs/add/operator/toPromise');
var TaskDataPartService = (function () {
    function TaskDataPartService(http) {
        this.http = http;
    }
    TaskDataPartService.prototype.getTaskDataParts = function (taskId) {
        return this.http.get(app_config_1.api.url + '/task/' + taskId + '/data')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(TaskDataPartService.handleError);
    };
    TaskDataPartService.prototype.getJobDataPart = function (taskId, index) {
        return this.http.get(app_config_1.api.url + '/task/' + taskId + '/data/' + index)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(TaskDataPartService.handleError);
    };
    TaskDataPartService.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    TaskDataPartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskDataPartService);
    return TaskDataPartService;
}());
exports.TaskDataPartService = TaskDataPartService;
//# sourceMappingURL=task-data-part.service.js.map