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
var job_description_service_1 = require("../../../domain/Job/job-description.service");
var job_description_1 = require("../../../domain/Job/job-description");
var job_program_service_1 = require("../../../domain/Job/job-program.service");
var job_program_1 = require("../../../domain/Job/job-program");
var job_state_1 = require("../../../domain/Job/job-state");
var job_data_part_service_1 = require("../../../domain/Job/job-data-part.service");
var job_result_service_1 = require("../../../domain/Job/job-result.service");
var JobDetails = (function () {
    function JobDetails(jobDescriptionService, jobProgramService, jobDataPartService, jobResultService, route) {
        this.jobDescriptionService = jobDescriptionService;
        this.jobProgramService = jobProgramService;
        this.jobDataPartService = jobDataPartService;
        this.jobResultService = jobResultService;
        this.route = route;
        this.jobDescription = new job_description_1.JobDescription();
        this.jobProgram = new job_program_1.JobProgram();
        this.jobDataParts = [];
        this.jobResults = {};
        this.JobState = job_state_1.JobState;
    }
    JobDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var jobId = params['jobId'];
            _this.jobDescriptionService.getJobDescription(jobId).then(function (result) { return _this.jobDescription = result; });
            _this.jobProgramService.getJobProgram(jobId).then(function (result) { return _this.jobProgram = result; });
            _this.jobDataPartService.getJobDataParts(jobId).then(function (result) { return _this.jobDataParts = result; });
            var self = _this;
            _this.jobResultService.getJobResults(jobId).then(function (results) {
                for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                    var result = results_1[_i];
                    if (self.jobResults[result.index] == null) {
                        self.jobResults[result.index] = [];
                    }
                    self.jobResults[result.index].push(result);
                }
            });
        });
    };
    JobDetails.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    JobDetails = __decorate([
        core_1.Component({
            selector: 'job-details',
            templateUrl: 'app/view/Jobs/JobDetails/job-details.html',
            providers: [job_description_service_1.JobDescriptionService, job_program_service_1.JobProgramService, job_data_part_service_1.JobDataPartService, job_result_service_1.JobResultService]
        }), 
        __metadata('design:paramtypes', [job_description_service_1.JobDescriptionService, job_program_service_1.JobProgramService, job_data_part_service_1.JobDataPartService, job_result_service_1.JobResultService, router_1.ActivatedRoute])
    ], JobDetails);
    return JobDetails;
}());
exports.JobDetails = JobDetails;
//# sourceMappingURL=job-details.component.js.map