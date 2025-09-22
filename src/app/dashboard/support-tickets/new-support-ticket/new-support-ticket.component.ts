import {Component} from "@angular/core";
import {ButtonComponent} from "../../../shared/button/button.component";

@Component({
    selector : 'app-new-support-ticket',
    standalone : true,
    imports: [
        ButtonComponent
    ],
    templateUrl : './new-support-ticket.component.html',
    styleUrls : ['./new-support-ticket.component.css']
})

export class NewSupportTicketComponent {}
