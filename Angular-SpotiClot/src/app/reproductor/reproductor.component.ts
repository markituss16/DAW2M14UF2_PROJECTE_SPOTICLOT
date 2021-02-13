import { Component, OnInit } from '@angular/core';
import { Cancons } from '../cancons';
import { ActivatedRoute } from '@angular/router';
import { CanconsService } from '../cancons.service';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  canco: Cancons;
  id;
  favorits;

  constructor(
    private route: ActivatedRoute,
    private canconsService: CanconsService,
  ) { 
    this.route.params.subscribe( params => {
    this.id= params['id'] ;
  }); }

  ngOnInit(): void {
    this.getCanco();
    if(localStorage.getItem("favorit")){
      this.favorits = JSON.parse(localStorage.getItem("favorit"));
    }
  }

  getCanco(): void {
    console.log(this.id);
    this.canconsService.getCanco(parseInt(this.id))
      .subscribe(canco => this.canco = canco);
  }
}
