import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-table',
  templateUrl: './registration-table.component.html',
  styleUrls: ['./registration-table.component.scss']
})
export class RegistrationTableComponent {

  listInput = ['item', 'date', 'flag', 'data', 'price'];

  constructor() {}
}
