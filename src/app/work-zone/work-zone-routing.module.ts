import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TituloComponent } from './component/titulo.component';

const routes: Routes = [
  {path: 'ti', component: TituloComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkZoneRoutingModule { }
k
