import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { DataSectionComponent } from './pages/data-section.component';
import { ExcelFactoryComponent } from './components/excel-factory/excel-factory.component';



@NgModule({
  declarations: [DataSectionComponent, ExcelFactoryComponent],
  imports: [
    CommonModule,
    HomeModule
  ]
})
export class DataSectionModule { }
