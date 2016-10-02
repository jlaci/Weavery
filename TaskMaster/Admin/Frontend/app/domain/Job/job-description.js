"use strict";
(function (JobState) {
    JobState[JobState["New"] = 0] = "New";
    JobState[JobState["Active"] = 1] = "Active";
    JobState[JobState["Finished"] = 2] = "Finished";
})(exports.JobState || (exports.JobState = {}));
var JobState = exports.JobState;
var JobDescription = (function () {
    function JobDescription() {
    }
    return JobDescription;
}());
exports.JobDescription = JobDescription;
//# sourceMappingURL=job-description.js.map