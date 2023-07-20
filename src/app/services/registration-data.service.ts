import { Injectable } from '@angular/core';
import { InputData } from '../interface/inputData.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDataService {

  constructor() { }

  private listInput: InputData[] = [
    { name: 'item' , val:''},
    { name: 'date' , val:''},
    { name: 'flag' , val:''},
    { name: 'data' , val:''},
    { name: 'description' , val:''}
  ];

  getListInputs(): InputData[]{
    return this.listInput;
  }
}
