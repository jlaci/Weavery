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
var task_description_service_1 = require("../../../domain/Task/task-description.service");
var task_description_1 = require("../../../domain/Task/task-description");
var task_program_service_1 = require("../../../domain/Task/task-program.service");
var task_program_1 = require("../../../domain/Task/task-program");
var task_state_1 = require("../../../domain/Task/task-state");
var task_data_part_service_1 = require("../../../domain/Task/task-data-part.service");
var task_result_service_1 = require("../../../domain/Task/task-result.service");
var TaskDetails = (function () {
    function TaskDetails(taskDescriptionService, taskProgramService, taskDataPartService, taskResultService, route) {
        this.taskDescriptionService = taskDescriptionService;
        this.taskProgramService = taskProgramService;
        this.taskDataPartService = taskDataPartService;
        this.taskResultService = taskResultService;
        this.route = route;
        this.taskDescription = new task_description_1.TaskDescription();
        this.taskProgram = new task_program_1.TaskProgram();
        this.taskDataParts = [];
        this.taskResults = {};
        this.TaskState = task_state_1.TaskState;
    }
    TaskDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var taskId = params['taskId'];
            _this.taskDescriptionService.getTaskDescription(taskId).then(function (result) { return _this.taskDescription = result; });
            _this.taskProgramService.getTaskProgram(taskId).then(function (result) { return _this.taskProgram = result; });
            _this.taskDataPartService.getTaskDataParts(taskId).then(function (result) { return _this.taskDataParts = result; });
            var self = _this;
            _this.taskResultService.getTaskResults(taskId).then(function (results) {
                for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                    var result = results_1[_i];
                    if (self.taskResults[result.index] == null) {
                        self.taskResults[result.index] = [];
                    }
                    self.taskResults[result.index].push(result);
                }
            });
        });
    };
    TaskDetails.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TaskDetails = __decorate([
        core_1.Component({
            selector: 'job-details',
            templateUrl: 'app/templates/Tasks/TaskDetails/task-details.html',
            providers: [task_description_service_1.TaskDescriptionService, task_program_service_1.TaskProgramService, task_data_part_service_1.TaskDataPartService, task_result_service_1.TaskResultService]
        }), 
        __metadata('design:paramtypes', [task_description_service_1.TaskDescriptionService, task_program_service_1.TaskProgramService, task_data_part_service_1.TaskDataPartService, task_result_service_1.TaskResultService, router_1.ActivatedRoute])
    ], TaskDetails);
    return TaskDetails;
}());
exports.TaskDetails = TaskDetails;
//# sourceMappingURL=task-details.component.js.map