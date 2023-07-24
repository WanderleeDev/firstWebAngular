import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { RegistrationTableComponent } from './registration-table/registration-table.component';
import { ContentTableComponent } from './content-table/content-table.component';
import { NavbarWebComponent } from './navbar-web/navbar-web.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { ApplyTransparencyPipe } from './pipes/apply-transparency.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderPageComponent,
    RegistrationTableComponent,
    ContentTableComponent,
    NavbarWebComponent,
    ColorChangerComponent,
    ApplyTransparencyPipe
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
