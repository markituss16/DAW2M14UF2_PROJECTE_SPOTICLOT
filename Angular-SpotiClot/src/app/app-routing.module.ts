import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CanconsComponent } from './cancons/cancons.component';
import { AlbumComponent } from './album/album.component';
import { ArtistaComponent } from './artista/artista.component';
import { TableExpandableRowsExample } from './buscador/buscador.component';
import { ReproductorComponent } from './reproductor/reproductor.component';

const encaminaments: Routes = [
  { path: '', redirectTo: '/inici', pathMatch: 'full' },
  { path: 'inici', component: HomeComponent },
  { path: 'album/:album', component: AlbumComponent},
  { path: 'artista/:artista', component: ArtistaComponent},
  { path: 'cancons', component: CanconsComponent},
  { path: 'buscador', component: TableExpandableRowsExample},
  { path: 'reproductor/:id', component: ReproductorComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(encaminaments)],
  exports: [RouterModule]
})
export class AppRoutingModule { }