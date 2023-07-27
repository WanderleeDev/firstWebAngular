import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
//  interface and  types
import { InputData } from '../../interface/inputData.interface';
import { IColorObject } from '../../interface/objectColor.interface';
import { ITotalData } from '../../interface/totalData.interface';
//  services
import { RegistrationDataService } from '../../services/resgistrationData/registration-data.service';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';
import { DriverService } from 'src/app/services/driverJS/driver-js.service';
import { driver } from "driver.js";



@Component({
  selector: 'app-registration-table',
  templateUrl: './registration-table.component.html',
  styleUrls: ['./registration-table.component.scss']
})
export class RegistrationTableComponent implements OnInit {

  listInput: InputData[] = [
    { name: 'item'},
    { name: 'date'},
    { name: 'flag'},
    { name: 'data'},
    { name: 'price'}
  ];

  formProducts: FormGroup;

  paramsTour =  {showProgress: true,
    steps: [
      { element: '#form', popover: { title: 'Title', description: 'Description' } },
      { element: '#la1', popover: { title: 'Title', description: 'Description' } },
      { element: '#la2', popover: { title: 'Title', description: 'Description' } },
      { element: '#la3', popover: { title: 'Title', 
      description:"<img src='https://i.imgur.com/EAQhHu5.gif' style='height: 202.5px; width: 270px;' /><span style='font-size: 15px; display: block; margin-top: 10px; text-align: center;'>Yet another highlight example.</span>" } },
    ]
  }

  color: IColorObject = {
    colorList: '#25ac97'
  };

  productData!: ITotalData[];

  isViewInfo: boolean = false;


  constructor(
    private registrationDataService : RegistrationDataService,
    private localStorageService : LocalStorageService, 
    private driverService : DriverService
  ){
    this.formProducts = registrationDataService.getFormValidate();
  }

  ngOnInit(): void {
    this.productData = this.localStorageService.getLocalData();
  }

  handlerSubmit(event:Event){
    if (this.formProducts.valid) {
      const data: ITotalData = {...this.formProducts.value,...this.color}
      this.productData!.push(data);
      this.localStorageService.saveLocal(this.productData)
      this.formProducts.reset();
    } 
  }
  //  acceder a los estados de los inputs
  getInputState(input: string ): FormControl {
    return this.formProducts.get(input) as FormControl
  }

  viewInfo(){
    this.isViewInfo = true;
  }
  
  hiddenInfo(){
    this.isViewInfo = false;
  }

  getColor(data: string){
    this.color.colorList = data;
  }

  
  activateDriver(){
    this.driverService.driverObj.drive()
  }
}
