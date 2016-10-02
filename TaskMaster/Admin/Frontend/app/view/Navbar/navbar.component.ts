import { Component } from '@angular/core';
import {api} from "../../app.config";

@Component({
    selector: 'task-master-navbar',
    templateUrl: 'app/view/Navbar/navbar.html'
})

export class Navbar {
    backendUrl = api.serverAddress;
}