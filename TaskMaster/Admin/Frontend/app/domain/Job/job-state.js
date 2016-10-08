"use strict";
(function (JobState) {
    JobState[JobState["New"] = 0] = "New";
    JobState[JobState["Active"] = 1] = "Active";
    JobState[JobState["Finished"] = 2] = "Finished";
})(exports.JobState || (exports.JobState = {}));
var JobState = exports.JobState;
//# sourceMappingURL=job-state.js.map