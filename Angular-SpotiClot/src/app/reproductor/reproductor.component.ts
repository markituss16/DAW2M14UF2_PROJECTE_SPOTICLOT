import { Component, Input, OnInit } from '@angular/core';
import { Cancons } from '../cancons';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CanconsService } from '../cancons.service';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  canco: Cancons;
  id;

  constructor(
    private route: ActivatedRoute,
    private canconsService: CanconsService,
  ) { 
    this.route.params.subscribe( params => {
    this.id= params['id'] ;
  }); }

  ngOnInit(): void {
    this.getCanco();
  }

  getCanco(): void {
    console.log(this.id);
    this.canconsService.getCanco(parseInt(this.id))
      .subscribe(canco => this.canco = canco);
  }
}
