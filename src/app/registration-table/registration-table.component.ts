import { Component } from '@angular/core';
import { InputData } from '../interface/inputData.interface';

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


  handlerSubmit(event:Event){
    event.preventDefault();
    const validator = this.listInput.every((value)=> Boolean(value.val));

    try {
      if (validator) {console.log(this.listInput);}
    } catch (error) {console.error(error);}
  }
}
