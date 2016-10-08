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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var job_result_service_1 = require("../../../domain/Job/job-result.service");
var JobResults = (function () {
    function JobResults(jobResultService, route) {
        this.jobResultService = jobResultService;
        this.route = route;
        this.jobResults = [];
    }
    JobResults.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.jobId = params['jobId'];
            _this.index = params['index'];
            _this.jobResultService.getJobResult(_this.jobId, _this.index).then(function (result) { return _this.jobResults = result; });
        });
    };
    JobResults.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    JobResults = __decorate([
        core_1.Component({
            selector: 'jobs',
            templateUrl: 'app/view/Jobs/JobResults/job-results.html',
            providers: [job_result_service_1.JobResultService]
        }), 
        __metadata('design:paramtypes', [job_result_service_1.JobResultService, router_1.ActivatedRoute])
    ], JobResults);
    return JobResults;
}());
exports.JobResults = JobResults;
//# sourceMappingURL=job-results.component.js.map