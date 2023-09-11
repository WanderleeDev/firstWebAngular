import { Injectable } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
//  interface
import { IFormValidate } from './IFormValidate.interface';
import { IErrorMessages } from './IErrorMsn.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDataService {
  private pattern = {
    number:  '^[0-9]+(\\.[0-9]{1,2})?$',
    date:'^(0?[1-9]|1[0-2])[-/](0?[1-9]|[12]\\d|3[01])[-/](\\d{2}|\\d{4})$',
    data: '^[^{}\\[\\]<>+\\-@]+$'
  }
  private errorMessages: IErrorMessages = {
    basic: {
      required: 'This field is required.',
    },
    item: {
      pattern: 'It should not contain special characters.',
      msnHelp: {
        valid: 'No special characters ✅',
        invalid: 'N0 speci@l-ch@r@cter$ ❌',
      }
    },
    date: {
      pattern: 'The valid format should be: month/day/year.',
      msnHelp: {
        valid: '12/30/12 or 12-30-12 ✅',
        invalid: '8 november 2022 ❌',
      }
    },
    data: {
      pattern: 'It should not contain special characters.',
      msnHelp: {
        valid: 'No special characters ✅',
        invalid: 'N0 speci@l-ch@r@cter$ ❌',
      }
    },
    price: {
      pattern: 'The number should have a maximum of 2 decimal places.',
      msnHelp: {
        valid: '24.99 ✅',
        invalid: '24.999 ❌',
      }
    },
    flag: {
      pattern: 'It should not contain special characters.',
      msnHelp: {
        valid: 'tools = hammer ✅',
        invalid: 'f = fruit ❌',
      }
    },
  };
  private formValidate: FormGroup<IFormValidate> = this.formBuilder.group({
    item: ['' ,[
      Validators.required,
      Validators.pattern(this.pattern.data),
    ]],
    date: ['' ,[
      Validators.required,
      Validators.pattern(this.pattern.date)
    ]],
    flag: ['' ,[
      Validators.required,
      Validators.pattern(this.pattern.data)
    ]],
    data: ['' ,[
      Validators.required,
      Validators.pattern(this.pattern.data)
    ]],
    price: ['',[
      Validators.required,
      Validators.pattern(this.pattern.number)
    ]],
  });

  constructor( private formBuilder: FormBuilder) {}

  // retorna la estructura del formulario base
  public getFormValidate(): FormGroup<IFormValidate>{
    return this.formValidate;
  }
  public getErrorMsn() {
    return this.errorMessages
  }
  //  valida y obtiene el valor del formulario
  public validateForm(form: FormGroup<IFormValidate>): any {
    return (form.valid)
      ? form.value
      : form.errors
  }
  public getValid(fieldName: string): boolean {
    const field = this.formValidate.get(fieldName)

    return field
      ? field.invalid && (field.dirty || field.touched)
      : false
  }
  public getInputState(nameInput: string) {
    return this.formValidate.get(nameInput) as FormControl
  }
  public getMsnErrors() {
    return this.errorMessages
  }
}
