import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { ControlPanel }   from "./ControlPanel/ControlPanel.component";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, ControlPanel ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }