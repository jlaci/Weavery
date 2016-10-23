"use strict";
var router_1 = require('@angular/router');
var control_panel_component_1 = require("./view/ControlPanel/control-panel.component");
var diagnostics_component_1 = require("./view/Diagnostics/diagnostics.component");
var task_details_component_1 = require("./templates/Tasks/TaskDetails/task-details.component");
var task_results_component_1 = require("./templates/Tasks/TaskResults/task-results.component");
var task_create_component_1 = require("./templates/Tasks/TaskCreate/task-create.component");
var tasks_component_1 = require("./view/Tasks/tasks.component");
var appRoutes = [
    {
        path: 'control-panel',
        component: control_panel_component_1.ControlPanel
    },
    {
        path: 'tasks',
        component: tasks_component_1.Tasks
    },
    {
        path: 'tasks-create',
        component: task_create_component_1.TaskCreate
    },
    {
        path: 'tasks/:taskId',
        component: task_details_component_1.TaskDetails
    },
    {
        path: 'tasks/:taskId/results/:index',
        component: task_results_component_1.TaskResults
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