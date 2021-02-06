import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ARTISTA } from './mock-artista';
import { Artista } from './artista';

@Injectable({
    providedIn: 'root'
  })
  export class ArtistaService {
  
    constructor() { }
  
    getArtistes(): Observable<Artista[]> {
      return of (ARTISTA);
    }
  
    getArtista(id:number): Observable<Artista> {
      return of (ARTISTA.find(artista => artista.idArtista === id));
    }
  }