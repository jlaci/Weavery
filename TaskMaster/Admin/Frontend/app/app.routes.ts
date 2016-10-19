import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ControlPanel} from "./view/ControlPanel/control-panel.component";
import {Diagnostics} from "./view/Diagnostics/diagnostics.component";
import {JobDetails} from "./templates/Jobs/JobDetails/job-details.component";
import {JobResults} from "./templates/Jobs/JobResults/job-results.component";
import {JobCreate} from "./templates/Jobs/JobCreate/job-create.component";
import {Jobs} from "./view/Jobs/jobs.component";

const appRoutes: Routes = [
    {
        path: 'control-panel',
        component: ControlPanel
    },
    {
        path: 'jobs',
        component: Jobs
    },
    {
        path: 'jobs-create',
        component: JobCreate
    },
    {
        path: 'jobs/:jobId',
        component: JobDetails
    },
    {
        path: 'jobs/:jobId/results/:index',
        component: JobResults
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