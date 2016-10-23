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
var task_result_service_1 = require("../../../domain/Task/task-result.service");
var TaskResults = (function () {
    function TaskResults(taskResultService, route) {
        this.taskResultService = taskResultService;
        this.route = route;
        this.taskResults = [];
    }
    TaskResults.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.taskId = params['taskId'];
            _this.index = params['index'];
            _this.taskResultService.getTaskResult(_this.taskId, _this.index).then(function (result) { return _this.taskResults = result; });
        });
    };
    TaskResults.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TaskResults = __decorate([
        core_1.Component({
            selector: 'task-results',
            templateUrl: 'app/templates/Tasks/TaskResults/task-results.html',
            providers: [task_result_service_1.TaskResultService]
        }), 
        __metadata('design:paramtypes', [task_result_service_1.TaskResultService, router_1.ActivatedRoute])
    ], TaskResults);
    return TaskResults;
}());
exports.TaskResults = TaskResults;
//# sourceMappingURL=task-results.component.js.map