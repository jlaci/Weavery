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
var job_description_service_1 = require("../../domain/Job/job-description.service");
var Jobs = (function () {
    function Jobs(jobDescriptionService) {
        this.jobDescriptionService = jobDescriptionService;
        this.jobDescriptions = [];
    }
    Jobs.prototype.ngOnInit = function () {
        var _this = this;
        this.jobDescriptionService.getJobDescriptions().then(function (jobDescriptions) { return _this.jobDescriptions = jobDescriptions; });
    };
    Jobs = __decorate([
        core_1.Component({
            selector: 'jobs',
            templateUrl: 'app/view/Jobs/jobs.html',
            providers: [job_description_service_1.JobDescriptionService]
        }), 
        __metadata('design:paramtypes', [job_description_service_1.JobDescriptionService])
    ], Jobs);
    return Jobs;
}());
exports.Jobs = Jobs;
//# sourceMappingURL=jobs.component.js.map