import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { AlbumsService } from '../album.service';
import { ALBUMS } from '../mock-album';
import {trigger, style, transition, animate, state} from '@angular/animations';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  animations: [
    trigger('desvanimentInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('1500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('1500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ]),
  ]
})

export class AlbumComponent implements OnInit {
  albums = ALBUMS;
  album;
  parametre: string;
  constructor(private albumsService: AlbumsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.parametre = this.route.snapshot.paramMap.get('album');
    this.album = this.albums.find(a=>a.nomAlbum == this.parametre);
    console.log(this.album);
  }
}
