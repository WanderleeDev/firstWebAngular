import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTablesService {
  listInput = ['item', 'date', 'flag', 'data', 'price'];
  private listTable = []
  private formItems = {
    item: '',
    date: '',
    flag: '',
    data: '',
    price: ''
  }
}

interface {
  
}
