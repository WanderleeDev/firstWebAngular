import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { RegistrationTableComponent } from './component/registration-table/registration-table.component';
import { ContentTableComponent } from './component/content-table/content-table.component';
import { HomeComponent } from './pages/home.component';
import { EmptyStateComponent } from './component/empty-state/empty-state.component';
import { BtnTableComponent } from './component/btn-table/btn-table.component';
import { ColoPickerComponent } from './component/colo-picker/colo-picker.component';
import { ColorTransparencyPipe } from './pipes/color-transparency.pipe';
import { ModalHelpComponent } from './component/modal-help/modal-help.component';


@NgModule({
  declarations: [
    RegistrationTableComponent,
    HomeComponent,
    EmptyStateComponent,
    ContentTableComponent,
    BtnTableComponent,
    ColoPickerComponent,
    ColorTransparencyPipe,
    ModalHelpComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ContentTableComponent
  ]
})
export class HomeModule { }
