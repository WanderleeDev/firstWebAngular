import { Component } from '@angular/core';
//  interfaces

import { Subscription } from 'rxjs';
//  services
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss']
})
export class ContentTableComponent {

  private productSuscribe:Subscription = new Subscription();


  constructor( private localStorageService: LocalStorageService){

  }
}
