import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ApplyTransparencyPipe } from './shared/pipes/apply-transparency.pipe';
import { FooterPageComponent } from './shared/components/footer-page/footer-page.component';
import { HeaderPageComponent } from './shared/components/header-page/header-page.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavbarWebComponent } from './shared/components/navbar-web/navbar-web.component';
import { SocialNetworksComponent } from './shared/components/social-networks/social-networks.component';
import { DataSectionModule } from './data-section/data-section.module';




@NgModule({
  declarations: [
    AppComponent,
    ApplyTransparencyPipe,
    FooterPageComponent,
    HeaderPageComponent,
    NavbarComponent,
    SocialNetworksComponent,
    NavbarWebComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataSectionModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
