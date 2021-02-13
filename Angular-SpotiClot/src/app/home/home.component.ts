import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import {trigger, style, transition, animate, state} from '@angular/animations';
import { AlbumsService } from '../album.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('enterStateP', [
      state('void', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(500, style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumsService.getAlbums()
      .subscribe(albums => this.albums = albums.slice(0,4));
  }
}
