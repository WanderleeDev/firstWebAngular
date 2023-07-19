import { Component } from '@angular/core';
import { InputData } from '../interface/inputData.interface';
import { FormGroup, Validators, FormControl } from '@angular/forms';



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

  form = new FormGroup({
    item: new FormControl( '' ,[Validators.required]),
    date: new FormControl( '' ,[Validators.required]),
    flag: new FormControl( '' ,[Validators.required]),
    data: new FormControl( '' ,[Validators.required]),
    description: new FormControl(' ',[Validators.required])
  });


  handlerSubmit(event:Event){
    event.preventDefault();
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
}
