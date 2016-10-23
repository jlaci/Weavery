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
var task_group_1 = require("../../domain/TaskGroup/task-group");
var task_group_service_1 = require("../../domain/TaskGroup/task-group.service");
var task_state_1 = require("../../domain/Task/task-state");
var ControlPanel = (function () {
    function ControlPanel(taskGroupService) {
        this.taskGroupService = taskGroupService;
        this.TaskState = task_state_1.TaskState;
        this.taskGroup = new task_group_1.TaskGroup('', task_group_1.WorkingMode.Centralised);
    }
    ControlPanel.prototype.ngOnInit = function () {
        var _this = this;
        this.taskGroupService.getTaskGroup().then(function (taskGroup) { return _this.taskGroup = taskGroup; });
    };
    ControlPanel = __decorate([
        core_1.Component({
            selector: 'control-panel',
            templateUrl: 'app/view/ControlPanel/control-panel.html',
            providers: [task_group_service_1.TaskGroupService]
        }), 
        __metadata('design:paramtypes', [task_group_service_1.TaskGroupService])
    ], ControlPanel);
    return ControlPanel;
}());
exports.ControlPanel = ControlPanel;
//# sourceMappingURL=control-panel.component.js.map