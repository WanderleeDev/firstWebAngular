import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDataService {

  constructor( private formBuilder: FormBuilder) { }

  formValidate = this.formBuilder.group({ 
    item: ['' ,Validators.required],
    date: ['' ,Validators.required],
    flag: ['' ,Validators.required],
    data: ['' ,Validators.required],
    description: ['',Validators.required]
  });

  getFormValidate(){
    return this.formValidate;
  }
}
