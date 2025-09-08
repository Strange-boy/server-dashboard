import {Component} from "@angular/core";

@Component({
    selector: 'app-server-status',
    standalone: true,
    templateUrl: './server-status.component.html',
    styleUrls: ['./server-status.component.css'],
    imports: []

})

export class ServerStatusComponent {
    currentStatus = 'online';
}
