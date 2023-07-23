import { Component } from '@angular/core';
import { InputData } from '../interface/inputData.interface';
import { RegistrationDataService } from '../services/resgistrationData/registration-data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IColorObject } from '../interface/objectColor.interface';
import { ITotalData } from '../interface/totalData.interface';



@Component({
  selector: 'app-registration-table',
  templateUrl: './registration-table.component.html',
  styleUrls: ['./registration-table.component.scss']
})
export class RegistrationTableComponent {

  listInput: InputData[] = [
    { name: 'item'},
    { name: 'date'},
    { name: 'flag'},
    { name: 'data'},
    { name: 'description'}
  ];

  formProducts: FormGroup;

  color: IColorObject = {
    colorList: '#25ac97'
  };

  productData: ITotalData[] = [];

  isViewInfo: boolean = false;


  constructor(
    private registrationDataService : RegistrationDataService
  ){
    this.formProducts = registrationDataService.getFormValidate();
  }

  handlerSubmit(event:Event){
    if (this.formProducts.valid) {
      const data: ITotalData = {...this.formProducts.value,...this.color}
      this.productData.push(data);
      this.registrationDataService.saveLocal(this.productData)
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
}
