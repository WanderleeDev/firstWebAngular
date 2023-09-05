import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { RegistrationTableComponent } from './component/registration-table/registration-table.component';
import { ContentTableComponent } from './component/content-table/content-table.component';
import { HomeComponent } from './pages/home.component';
import { EmptyStateComponent } from './component/empty-state/empty-state.component';
import { BtnTableComponent } from './component/btn-table/btn-table.component';


@NgModule({
  declarations: [
    RegistrationTableComponent,
    HomeComponent,
    EmptyStateComponent,
    ContentTableComponent,
    BtnTableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ContentTableComponent
  ]
})
export class HomeModule { }
