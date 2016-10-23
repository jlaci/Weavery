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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var control_panel_component_1 = require("./view/ControlPanel/control-panel.component");
var navbar_component_1 = require("./view/Navbar/navbar.component");
var app_routes_1 = require("./app.routes");
var task_descriptions_table_component_1 = require("./templates/Tasks/task-descriptions-table.component");
var diagnostics_component_1 = require("./view/Diagnostics/diagnostics.component");
var http_1 = require("@angular/http");
var task_details_component_1 = require("./templates/Tasks/TaskDetails/task-details.component");
var task_results_component_1 = require("./templates/Tasks/TaskResults/task-results.component");
var task_create_component_1 = require("./templates/Tasks/TaskCreate/task-create.component");
var tasks_component_1 = require("./view/Tasks/tasks.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routes_1.routing],
            declarations: [app_component_1.AppComponent, control_panel_component_1.ControlPanel, navbar_component_1.Navbar, tasks_component_1.Tasks, diagnostics_component_1.Diagnostics, task_details_component_1.TaskDetails, task_results_component_1.TaskResults, task_create_component_1.TaskCreate, task_descriptions_table_component_1.TaskDescriptionsTable],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map