import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDataService {

  constructor( private formBuilder: FormBuilder) { }

pattern = {
  number:  '^[0-9]+$',
  date:'^(0?[1-9]|1[0-2])[-/](0?[1-9]|[12]\\d|3[01])[-/](\\d{2}|\\d{4})$',
  data: '^[^{}\\[\\]<>+\\-@]+$'

}

  formValidate = this.formBuilder.group({ 
    item: ['' ,[Validators.required, Validators.pattern(this.pattern.data)]],
    date: ['' ,[Validators.required, Validators.pattern(this.pattern.date)]],
    flag: ['' ,Validators.required],
    data: ['' ,[Validators.required, Validators.pattern(this.pattern.data)]],
    price: ['',[Validators.required, Validators.pattern(this.pattern.number)]],
  });

  getFormValidate(){
    return this.formValidate;
  }
}
