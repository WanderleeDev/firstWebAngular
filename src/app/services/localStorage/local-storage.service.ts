import { Injectable } from '@angular/core';
//  interface
import { IBoardGroup } from '../dataTables/IRowBoard.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // guarda datos en el local storage
  saveLocal(object: IBoardGroup[]){
    localStorage.setItem('boardGroup',JSON.stringify(object));
  }

  //  recupera datos del local storage
  getLocalData(localName: string): IBoardGroup[] | [] {
    const data = localStorage.getItem(localName)
    return (data)
      ? JSON.parse(data)
      : [];
  }

  //Limpia los datos almacenados en el local storage
  clearData(){
    localStorage.clear();
  }
}
