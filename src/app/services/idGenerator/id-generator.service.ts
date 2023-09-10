import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {
  generateRandomId(): string {
    return (!crypto || !window.crypto.randomUUID)
    //  La API de Web Cryptography no es compatible en este navegador
      ? Math.random().toString(36).substring(2)
    //  La API de Web Cryptography es compatible en este navegador.
      : crypto.randomUUID()
  }
}
