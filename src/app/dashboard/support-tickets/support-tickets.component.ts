import {Component} from "@angular/core";

import {NewSupportTicketComponent} from "./new-support-ticket/new-support-ticket.component";

@Component({
    selector: 'app-support-tickets',
    standalone: true,
    imports: [NewSupportTicketComponent],
    templateUrl: './support-tickets.component.html',
    styleUrls: ['./support-tickets.component.css']
})

export class SupportTicketsComponent {}
