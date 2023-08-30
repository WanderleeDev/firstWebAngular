import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRegisterComponent } from './main-register/main-register.component';
import { WorkZoneComponent } from './work-zone/work-zone.component';
import { DataSectionComponent } from './data-section/data-section.component';



@NgModule({
  declarations: [
    MainRegisterComponent,
    WorkZoneComponent,
    DataSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
