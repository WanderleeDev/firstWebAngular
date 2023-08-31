import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataSectionComponent } from './data-section/pages/data-section.component';
import { WorkZoneComponent } from './work-zone/pages/work-zone.component';
import { HomeComponent } from './home/pages/home.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dataSection', component: DataSectionComponent},
  {path: 'about', component: WorkZoneComponent},
  {path:'**', pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
