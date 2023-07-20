import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDataService {

  constructor() { }

  private formValidate = new FormGroup({
    item: new FormControl( '' ,[Validators.required]),
    date: new FormControl( '' ,[Validators.required]),
    flag: new FormControl( '' ,[Validators.required]),
    data: new FormControl( '' ,[Validators.required]),
    description: new FormControl('',[Validators.required])
  });

  getFormValidate(){
    return this.formValidate;
  }
}
