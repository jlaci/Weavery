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
var JobDescriptionsTable = (function () {
    function JobDescriptionsTable(jobDescriptionService) {
        this.jobDescriptionService = jobDescriptionService;
        this.jobDescriptions = [];
    }
    JobDescriptionsTable.prototype.ngOnInit = function () {
        var _this = this;
        this.jobDescriptionService.getJobDescriptions(this.states).then(function (jobDescriptions) { return _this.jobDescriptions = jobDescriptions; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], JobDescriptionsTable.prototype, "states", void 0);
    JobDescriptionsTable = __decorate([
        core_1.Component({
            selector: 'job-descriptions-table',
            templateUrl: 'app/templates/Jobs/job-descriptions-table.html',
            providers: [job_description_service_1.JobDescriptionService]
        }), 
        __metadata('design:paramtypes', [job_description_service_1.JobDescriptionService])
    ], JobDescriptionsTable);
    return JobDescriptionsTable;
}());
exports.JobDescriptionsTable = JobDescriptionsTable;
//# sourceMappingURL=job-descriptions-table.component.js.map