import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { AlbumsService } from '../album.service';
import { ALBUMS } from '../mock-album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
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
