import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ITotalData } from 'src/app/interface/totalData.interface';

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

  saveLocal(object:ITotalData[]){
    localStorage.setItem('data',JSON.stringify(object));
  }
}
