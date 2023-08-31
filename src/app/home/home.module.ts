import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { RegistrationTableComponent } from './component/registration-table/registration-table.component';
import { ContentTableComponent } from './component/content-table/content-table.component';
import { HomeComponent } from './pages/home.component';


@NgModule({
  declarations: [
    RegistrationTableComponent,
    ContentTableComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    ContentTableComponent
  ]
})
export class HomeModule { }
