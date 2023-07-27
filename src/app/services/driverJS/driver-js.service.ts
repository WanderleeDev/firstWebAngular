import { Injectable } from '@angular/core';
import { driver } from "driver.js";

@Injectable({
  providedIn: 'root'
})
export class DriverService {



  driverObj = driver({ showProgress: true,
    steps: [
      { element: '#form', popover: { title: 'Title', description: 'Description' } },
      { element: '#la1', popover: { title: 'Title', description: 'Description' } },
      { element: '#la2', popover: { title: 'Title', description: 'Description' } },
      { element: '#la3', popover: { title: 'Title', 
      description:"<img src='https://i.imgur.com/EAQhHu5.gif' style='height: 202.5px; width: 270px;' /><span style='font-size: 15px; display: block; margin-top: 10px; text-align: center;'>Yet another highlight example.</span>" } },
    ]
  });
}
