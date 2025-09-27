import {Component, Input} from "@angular/core";

@Component({
    selector : 'app-control',
    templateUrl : './control.component.html',
    styleUrls : ['./control.component.css'],
    standalone : true,
    imports : []
})

export class ControlComponent {
    @Input({required: true}) label !: string;
}
