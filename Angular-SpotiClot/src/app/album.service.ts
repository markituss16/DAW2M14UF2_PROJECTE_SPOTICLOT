import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ALBUMS } from './mock-album';
import { Album } from './album';

@Injectable({
    providedIn: 'root'
  })
  export class AlbumsService {
  
    constructor() { }
  
    getAlbums(): Observable<Album[]> {
      return of (ALBUMS);
    }
  
    getAlbum(id:number): Observable<Album> {
      return of (ALBUMS.find(album => album.idAlbum === id));
    }
  }