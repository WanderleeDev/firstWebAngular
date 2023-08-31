import { Injectable } from '@angular/core';
import { driver } from "driver.js";
import {  Steps } from 'src/app/shared/interface/driverParams.interface';
//import '../../../assets/img//animate/gifCat.webp'

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  instanceDriver = (showProgress:boolean, steps:Steps[]) => {
    return driver({
      showProgress: showProgress,
      steps: steps,
    });
  }
}

/*
** Ejemplo de parámetros:
**
** showProgressValue: boolean = true;
**
** paramsTour: Steps[] = [
**   { element: '#form', popover: { title: 'Title', description: 'Description' } },
**   { element: '#la1', popover: { title: 'Title', description: 'Description' } },
**   { element: '#la2', popover: { title: 'Title', description: 'Description' } },
**   {
**     element: '#la3',
**     popover: {
**       title: 'Title',
**       description:
**         "<img src='../../../assets/img//animate/gifCat.webp' style='height: 202.5px; width: 270px;' /><span style='font-size: 15px; display: block; margin-top: 10px; text-align: center;'>Yet another highlight example.</span>",
**     },
**   },
** ];
*/
