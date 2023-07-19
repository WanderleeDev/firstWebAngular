import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { RegistrationTableComponent } from './registration-table/registration-table.component';
import { ContentTableComponent } from './content-table/content-table.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderPageComponent,
    RegistrationTableComponent,
    ContentTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
