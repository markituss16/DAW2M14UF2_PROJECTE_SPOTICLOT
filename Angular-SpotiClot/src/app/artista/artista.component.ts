import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ARTISTA } from './mock-artista';
import { ArtistaService } from './artista.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artistes = ARTISTA;
  artista;
  parametre: string;
  constructor(private artistaService: ArtistaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.parametre = this.route.snapshot.paramMap.get('artista');
    this.artista = this.artistes.find(a=>a.nom == this.parametre);
    console.log(this.artista);
  }
}