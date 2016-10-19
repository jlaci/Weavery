"use strict";
var router_1 = require('@angular/router');
var control_panel_component_1 = require("./view/ControlPanel/control-panel.component");
var diagnostics_component_1 = require("./view/Diagnostics/diagnostics.component");
var job_details_component_1 = require("./templates/Jobs/JobDetails/job-details.component");
var job_results_component_1 = require("./templates/Jobs/JobResults/job-results.component");
var job_create_component_1 = require("./templates/Jobs/JobCreate/job-create.component");
var jobs_component_1 = require("./view/Jobs/jobs.component");
var appRoutes = [
    {
        path: 'control-panel',
        component: control_panel_component_1.ControlPanel
    },
    {
        path: 'jobs',
        component: jobs_component_1.Jobs
    },
    {
        path: 'jobs-create',
        component: job_create_component_1.JobCreate
    },
    {
        path: 'jobs/:jobId',
        component: job_details_component_1.JobDetails
    },
    {
        path: 'jobs/:jobId/results/:index',
        component: job_results_component_1.JobResults
    },
    {
        path: 'diagnostics',
        component: diagnostics_component_1.Diagnostics
    },
    {
        path: '',
        redirectTo: '/control-panel',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map