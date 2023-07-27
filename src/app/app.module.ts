import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { RegistrationTableComponent } from './components/registration-table/registration-table.component';
import { ContentTableComponent } from './components/content-table/content-table.component';
import { NavbarWebComponent } from './components/navbar-web/navbar-web.component';
import { ColorChangerComponent } from './components/color-changer/color-changer.component';
import { ApplyTransparencyPipe } from './pipes/apply-transparency.pipe';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { WorkZoneComponentComponent } from './components/work-zone-component/work-zone-component.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderPageComponent,
    RegistrationTableComponent,
    ContentTableComponent,
    NavbarWebComponent,
    ColorChangerComponent,
    ApplyTransparencyPipe,
    FooterPageComponent,
    SocialNetworksComponent,
    EmptyStateComponent,
    WorkZoneComponentComponent
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
