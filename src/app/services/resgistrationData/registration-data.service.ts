import { Injectable } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
//  interface
import { IFormValidate } from './IFormValidate.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDataService {
  private pattern = {
    number:  '^[0-9]+$',
    date:'^(0?[1-9]|1[0-2])[-/](0?[1-9]|[12]\\d|3[01])[-/](\\d{2}|\\d{4})$',
    data: '^[^{}\\[\\]<>+\\-@]+$'
  }
  private formValidate: FormGroup<IFormValidate> = this.formBuilder.group({
    item: ['' ,[Validators.required, Validators.pattern(this.pattern.data)]],
    date: ['' ,[Validators.required, Validators.pattern(this.pattern.date)]],
    flag: ['' ,Validators.required],
    data: ['' ,[Validators.required, Validators.pattern(this.pattern.data)]],
    price: ['',[Validators.required, Validators.pattern(this.pattern.number)]],
  });

  constructor( private formBuilder: FormBuilder) {}

  // retorna la estructura del formulario base
  public getFormValidate(): FormGroup<IFormValidate>{
    return this.formValidate;
  }
  //  valida y obtiene el valor del formulario
  public validateForm(form: FormGroup<IFormValidate>): any {
    if (form.valid) {
      console.log(form.value);
      return form.value
    }
    else {
      console.log(form.errors)
    }
  }
}
