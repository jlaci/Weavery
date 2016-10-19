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
var ArrayParamAppender_1 = require('../Util/ArrayParamAppender');
var JobDescriptionService = (function () {
    function JobDescriptionService(http) {
        this.http = http;
    }
    JobDescriptionService.prototype.getJobDescriptions = function (states) {
        var params = new http_1.URLSearchParams();
        if (states != null) {
            ArrayParamAppender_1.ArrayParamAppender.appendArray(params, 'states', states);
        }
        return this.http.get(app_config_1.api.url + '/job', { search: params })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(JobDescriptionService.handleError);
    };
    JobDescriptionService.prototype.getJobDescription = function (jobId) {
        return this.http.get(app_config_1.api.url + '/job/' + jobId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(JobDescriptionService.handleError);
    };
    JobDescriptionService.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    JobDescriptionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JobDescriptionService);
    return JobDescriptionService;
}());
exports.JobDescriptionService = JobDescriptionService;
//# sourceMappingURL=job-description.service.js.map