import { Injectable } from '@angular/core';
import { Cancons } from './cancons';
import { CANCONS } from './mock-cancons';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanconsService {

  constructor() { }

  getCancons(): Observable<Cancons[]> {
    return of (CANCONS);
  }

  getCanco(id:number): Observable<Cancons> {
    return of (CANCONS.find(canco => canco.id === id));
  }
}