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
var task_description_service_1 = require("../../domain/Task/task-description.service");
var TaskDescriptionsTable = (function () {
    function TaskDescriptionsTable(taskDescriptionService) {
        this.taskDescriptionService = taskDescriptionService;
        this.taskDescriptions = [];
    }
    TaskDescriptionsTable.prototype.ngOnInit = function () {
        var _this = this;
        this.taskDescriptionService.getTaskDescriptions(this.states).then(function (taskDescriptions) { return _this.taskDescriptions = taskDescriptions; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TaskDescriptionsTable.prototype, "states", void 0);
    TaskDescriptionsTable = __decorate([
        core_1.Component({
            selector: 'task-descriptions-table',
            templateUrl: 'app/templates/Tasks/task-descriptions-table.html',
            providers: [task_description_service_1.TaskDescriptionService]
        }), 
        __metadata('design:paramtypes', [task_description_service_1.TaskDescriptionService])
    ], TaskDescriptionsTable);
    return TaskDescriptionsTable;
}());
exports.TaskDescriptionsTable = TaskDescriptionsTable;
//# sourceMappingURL=task-descriptions-table.component.js.map