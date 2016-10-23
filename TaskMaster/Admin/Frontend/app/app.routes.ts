import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ControlPanel} from "./view/ControlPanel/control-panel.component";
import {Diagnostics} from "./view/Diagnostics/diagnostics.component";
import {TaskDetails} from "./templates/Tasks/TaskDetails/task-details.component";
import {TaskResults} from "./templates/Tasks/TaskResults/task-results.component";
import {TaskCreate} from "./templates/Tasks/TaskCreate/task-create.component";
import {Tasks} from "./view/Tasks/tasks.component";


const appRoutes: Routes = [
    {
        path: 'control-panel',
        component: ControlPanel
    },
    {
        path: 'tasks',
        component: Tasks
    },
    {
        path: 'tasks-create',
        component: TaskCreate
    },
    {
        path: 'tasks/:taskId',
        component: TaskDetails
    },
    {
        path: 'tasks/:taskId/results/:index',
        component: TaskResults
    },
    {
        path: 'diagnostics',
        component: Diagnostics
    },
    {
        path: '',
        redirectTo: '/control-panel',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);