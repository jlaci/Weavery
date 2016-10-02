"use strict";
var router_1 = require('@angular/router');
var control_panel_component_1 = require("./view/ControlPanel/control-panel.component");
var jobs_component_1 = require("./view/Jobs/jobs.component");
var diagnostics_component_1 = require("./view/Diagnostics/diagnostics.component");
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