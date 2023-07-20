import { Component } from '@angular/core';
import { InputData } from '../interface/inputData.interface';
import { RegistrationDataService } from '../services/resgistrationData/registration-data.service';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-registration-table',
  templateUrl: './registration-table.component.html',
  styleUrls: ['./registration-table.component.scss']
})
export class RegistrationTableComponent {

  listInput: InputData[] = [
    { name: 'item' , val:''},
    { name: 'date' , val:''},
    { name: 'flag' , val:''},
    { name: 'data' , val:''},
    { name: 'description' , val:''}
  ];
  isViewInfo: boolean = false;

  form: FormGroup;

  constructor(
    private registrationDataService : RegistrationDataService
  ){
    this.form = registrationDataService.getFormValidate();
  }


  handlerSubmit(event:Event){
    const validator = this.listInput.every((value)=> Boolean(value.val));

    try {
      if (validator) {
        console.log(this.listInput);
        this.saveLocal();
      }
    } catch (error) {console.error(error);}
  }

  saveLocal(){
    localStorage.setItem('data',JSON.stringify(this.listInput));
  }

  viewInfo(){
    this.isViewInfo = true;
  }
  
  hiddenInfo(){
    this.isViewInfo = false;
  }
}
