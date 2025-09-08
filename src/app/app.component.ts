import {Component} from '@angular/core';

import {HeaderComponent} from "./header/header.component";
import {ServerStatusComponent} from "./dashboard-items/server-status/server-status.component";
import {TrafficComponent} from "./dashboard-items/traffic/traffic.component";
import {SupportTicketsComponent} from "./dashboard-items/support-tickets/support-tickets.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, SupportTicketsComponent]
})

export class AppComponent {}
