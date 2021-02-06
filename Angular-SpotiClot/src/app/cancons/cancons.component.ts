import { Component, OnInit } from '@angular/core';
import { CanconsService } from '../cancons.service';
import { Cancons } from '../cancons';
import { CANCONS } from '../mock-cancons';

@Component({
  selector: 'app-cancons',
  templateUrl: './cancons.component.html',
  styleUrls: ['./cancons.component.css']
})
export class CanconsComponent implements OnInit {
  cancons: Cancons[];
  favs = new Array();

  constructor(private canconsService: CanconsService) { }

  ngOnInit() {
    this.getCancons();
    if(localStorage.getItem("favorit")){
      this.favs = JSON.parse(localStorage.getItem("favorit"));
      document.getElementById("resultat").innerHTML = JSON.parse(localStorage.getItem("favorit"));
    }
  }

  getCancons(): void {
    this.canconsService.getCancons()
      .subscribe(cancons => this.cancons = cancons);
  }

  guardar(id) {
    id = id - 1;
    this.favs.push(JSON.stringify(CANCONS[id].nom));
    localStorage.setItem("favorit", JSON.stringify(this.favs));
    document.getElementById("resultat").innerHTML = JSON.parse(localStorage.getItem("favorit"));
  }

  mostrar(id) {
    id = id - 1;
    for (let i = 0; i < this.favs.length; i++) {
      if (this.favs[i] == JSON.stringify(CANCONS[id].nom)) {
        this.favs.splice(i, 1);
        localStorage.setItem("favorit", JSON.stringify(this.favs));
        document.getElementById("resultat").innerHTML = JSON.parse(localStorage.getItem("favorit"));
      }
    }
  }
}
