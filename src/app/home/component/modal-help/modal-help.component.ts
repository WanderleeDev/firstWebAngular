import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-help',
  templateUrl: './modal-help.component.html',
  styleUrls: ['./modal-help.component.scss']
})
export class ModalHelpComponent {
  @Input() isViewModal= false
}
