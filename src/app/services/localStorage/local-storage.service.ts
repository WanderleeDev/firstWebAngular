import { Injectable } from '@angular/core';
import { ITotalData } from 'src/app/interface/totalData.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  saveLocal(object: ITotalData[]){
    localStorage.setItem('data',JSON.stringify(object));
    console.log(object);
    
  }

  getLocalData():ITotalData[] {
    //  recupera datos del local storage
    const dataStorage = localStorage.getItem('data');

    //  verifica si es contenido es null
    if( dataStorage === null){
      return [];
    }

    try {
    //  parsea los datos almacenados en el local storage
      return JSON.parse(dataStorage);
    } catch (error) {
    //  imprime el error y retorna null
      console.error(`Error al parsear los datos almacenados en el Local Storage:  ${error}`);
      return [];
    }
  }

  clearData(){
    localStorage.clear();
  }
}
