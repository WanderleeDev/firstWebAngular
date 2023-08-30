import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataSectionComponent } from './components/data-section/data-section.component';
import { MainRegisterComponent } from './components/main-register/main-register.component';
import { WorkZoneComponentComponent } from './components/work-zone-component/work-zone-component.component';

const routes: Routes = [
  {path: '', component: MainRegisterComponent},
  {path: 'dataSection', component: DataSectionComponent},
  {path: 'about', component: WorkZoneComponentComponent},
  {path:'**', pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
