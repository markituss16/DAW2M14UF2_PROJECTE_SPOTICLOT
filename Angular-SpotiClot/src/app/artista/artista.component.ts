import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ARTISTA } from './mock-artista';
import { ArtistaService } from './artista.service';
import {trigger, style, transition, animate, state} from '@angular/animations';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css'],
  animations: [
    trigger('deBaixADalt', [
      state('void', style({})),
      state('*', style({})),
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.7s ease-in-out', style({ transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('0.7s ease-in-out', style({ transform: 'translateY(-100%)' }))
      ]),
    ]),
  ]
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