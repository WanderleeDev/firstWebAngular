import { Component } from '@angular/core';
import { InputData } from '../interface/inputData.interface';
import { RegistrationDataService } from '../services/resgistrationData/registration-data.service';
import { FormControl, FormGroup } from '@angular/forms';



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

  isViewInfo: boolean = false;

  formProducts: FormGroup;

  constructor(
    private registrationDataService : RegistrationDataService
  ){
    this.formProducts = registrationDataService.getFormValidate();
  }

  handlerSubmit(event:Event){
    if (this.formProducts.valid) {
      
      console.log(this.formProducts.value);
      this.saveLocal();
      this.formProducts.reset();
      return this.formProducts.value;
    } 
  }

  getInputState(input: string ): FormControl {
    return this.formProducts.get(input) as FormControl
  }

  saveLocal(){
    localStorage.setItem('data',JSON.stringify(this.formProducts.value));
  }

  viewInfo(){
    this.isViewInfo = true;
  }
  
  hiddenInfo(){
    this.isViewInfo = false;
  }
}
