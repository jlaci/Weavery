"use strict";
(function (WorkingMode) {
    WorkingMode[WorkingMode["Distributed"] = 0] = "Distributed";
    WorkingMode[WorkingMode["Hybrid"] = 1] = "Hybrid";
    WorkingMode[WorkingMode["Centralised"] = 2] = "Centralised";
})(exports.WorkingMode || (exports.WorkingMode = {}));
var WorkingMode = exports.WorkingMode;
var TaskGroup = (function () {
    function TaskGroup(name, workingMode) {
        this.name = name;
        this.workingMode = workingMode;
    }
    return TaskGroup;
}());
exports.TaskGroup = TaskGroup;
//# sourceMappingURL=task-group.js.map