import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { ControlPanel }   from "./view/ControlPanel/control-panel.component";
import { NavbarComponent } from "./view/Navbar/navbar.component";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, ControlPanel, NavbarComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}