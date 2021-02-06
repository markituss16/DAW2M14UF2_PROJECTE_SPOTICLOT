import { Component, OnInit, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Cancons } from '../cancons';
import { CANCONS } from '../mock-cancons';
import { CanconsService } from '../cancons.service';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableExpandableRowsExample implements OnInit{
  title: 'Cercar per nom, àlbum o artista';
  searchText;
  dataSource = new MatTableDataSource(CANCONS);
  columnsToDisplay = ['id','nom', 'artista', 'album', 'any'];
  expandedElement: Cancons | null;

  @Input() canco: Cancons;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cancoService: CanconsService,
  ){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getCanco();
  }

  getCanco(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cancoService.getCanco(id)
      .subscribe(canco => this.canco = canco);
  }

  reproduir(id){
    this.router.navigate( ['/reproductor',id] );
  }
}

