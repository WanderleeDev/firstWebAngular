import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITotalData } from 'src/app/interface/totalData.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  private mainTotalData:ITotalData[] = []

  saveTemporalProducts(objData: ITotalData){
    this.mainTotalData.push(objData )
  }

  // guarda datos en el local storage
  saveLocal(object: ITotalData[]){
    localStorage.setItem('data',JSON.stringify(object));
    console.log(`'[DEBUG] Data saved:' ${object}`);
  }

  //  recupera datos del local storage
  getLocalData(): ITotalData[] {
    const dataStorage = localStorage.getItem('data');

    if (dataStorage !== null ) {
      try {
        return JSON.parse(dataStorage);
      } catch (error) {
        console.error(`'[DEBUG] Error parsing data:' ${error}`);
      }
    }
    return [];
  }

  //Limpia los datos almacenados en el local storage
  clearData(){
    localStorage.clear();
  }
}
