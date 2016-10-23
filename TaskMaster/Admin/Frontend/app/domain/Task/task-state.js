"use strict";
(function (TaskState) {
    TaskState[TaskState["New"] = 0] = "New";
    TaskState[TaskState["Active"] = 1] = "Active";
    TaskState[TaskState["Finished"] = 2] = "Finished";
})(exports.TaskState || (exports.TaskState = {}));
var TaskState = exports.TaskState;
//# sourceMappingURL=task-state.js.map