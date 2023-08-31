import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { DataSectionComponent } from './pages/data-section.component';



@NgModule({
  declarations: [DataSectionComponent],
  imports: [
    CommonModule,
    HomeModule
  ]
})
export class DataSectionModule { }
