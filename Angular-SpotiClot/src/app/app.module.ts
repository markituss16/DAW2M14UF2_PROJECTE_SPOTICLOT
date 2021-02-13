import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { pipeParaulaPetita } from './paraula-petita';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistaComponent } from './artista/artista.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { AlbumComponent } from './album/album.component';
import { pipeLletraMajuscula } from './lletraMajuscula.pipe';
import {MatCardModule} from '@angular/material/card';   
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from  '@angular/common';
import {MatButtonModule} from '@angular/material/button'; 
import { CanconsComponent } from './cancons/cancons.component';
import { TableExpandableRowsExample } from './buscador/buscador.component';
import {CdkTableModule} from '@angular/cdk/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    ReproductorComponent,
    AlbumComponent,
    CanconsComponent,
    TableExpandableRowsExample,
    pipeLletraMajuscula,
    pipeParaulaPetita
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
