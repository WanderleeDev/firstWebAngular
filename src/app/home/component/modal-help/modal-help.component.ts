import { Component, Input } from '@angular/core';
import { IMsnHelp } from 'src/app/services/resgistrationData/IErrorMsn.interface';

@Component({
  selector: 'app-modal-help',
  templateUrl: './modal-help.component.html',
  styleUrls: ['./modal-help.component.scss']
})
export class ModalHelpComponent {
  @Input() msnHelp?: IMsnHelp;
}
