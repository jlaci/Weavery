import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ControlPanel} from "./view/ControlPanel/control-panel.component";
import {Jobs} from "./view/Jobs/jobs.component";
import {Diagnostics} from "./view/Diagnostics/diagnostics.component";

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