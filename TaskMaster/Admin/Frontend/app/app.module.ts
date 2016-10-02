import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { ControlPanel }   from "./view/ControlPanel/control-panel.component";
import { Navbar } from "./view/Navbar/navbar.component";
import {routing} from "./app.routes";
import {Jobs} from "./view/Jobs/jobs.component";
import {Diagnostics} from "./view/Diagnostics/diagnostics.component";
import {HttpModule} from "@angular/http";

@NgModule({
    imports:      [ BrowserModule, HttpModule, routing ],
    declarations: [ AppComponent, ControlPanel, Navbar, Jobs, Diagnostics ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}