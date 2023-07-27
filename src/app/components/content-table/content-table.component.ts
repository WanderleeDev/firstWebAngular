import { Component, OnInit } from '@angular/core';
//  interfaces
import { ITotalData } from 'src/app/interface/totalData.interface';
//  services
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss']
})
export class ContentTableComponent implements OnInit {

  dataProduct: ITotalData[] = [];

  constructor( private localStorageService: LocalStorageService){}

  ngOnInit(): void{
    this.dataProduct = this.localStorageService.getLocalData();
    console.log('[DEBUG] Data saved:', this.dataProduct);    
    
  }
}
