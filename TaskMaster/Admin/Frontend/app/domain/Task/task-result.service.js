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
var TaskResultService = (function () {
    function TaskResultService(http) {
        this.http = http;
    }
    TaskResultService.prototype.getTaskResults = function (taskId) {
        return this.http.get(app_config_1.api.url + '/task/' + taskId + '/result')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(TaskResultService.handleError);
    };
    TaskResultService.prototype.getTaskResult = function (taskId, index) {
        return this.http.get(app_config_1.api.url + '/task/' + taskId + '/result/' + index)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(TaskResultService.handleError);
    };
    TaskResultService.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    TaskResultService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskResultService);
    return TaskResultService;
}());
exports.TaskResultService = TaskResultService;
//# sourceMappingURL=task-result.service.js.map