import {Component, Input, ViewEncapsulation} from "@angular/core";

@Component({
    selector : 'app-control',
    templateUrl : './control.component.html',
    styleUrls : ['./control.component.css'],
    standalone : true,
    imports : [],
    encapsulation: ViewEncapsulation.None
})

export class ControlComponent {
    @Input({required: true}) label !: string;
}
