import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { ControlPanel }   from "./view/ControlPanel/control-panel.component";
import { Navbar } from "./view/Navbar/navbar.component";
import {routing} from "./app.routes";
import {TaskDescriptionsTable} from "./templates/Tasks/task-descriptions-table.component";
import {Diagnostics} from "./view/Diagnostics/diagnostics.component";
import {HttpModule} from "@angular/http";
import {TaskDetails} from "./templates/Tasks/TaskDetails/task-details.component";
import {TaskResults} from "./templates/Tasks/TaskResults/task-results.component";
import {TaskCreate} from "./templates/Tasks/TaskCreate/task-create.component";
import {Tasks} from "./view/Tasks/tasks.component";

@NgModule({
    imports:      [ BrowserModule, HttpModule, routing ],
    declarations: [ AppComponent, ControlPanel, Navbar, Tasks, Diagnostics, TaskDetails, TaskResults, TaskCreate, TaskDescriptionsTable ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}