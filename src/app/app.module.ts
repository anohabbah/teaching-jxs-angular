import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonComponent as PokemonComponent } from './pokemon/pokemon.component';
import { FilterPokemonPipe } from './pipes/filter-pokemon.pipe';
import {HttpClientModule} from "@angular/common/http";
import {PokemonService} from "./pokemon.service";
import { DetailComponent } from './pokemon/detail/detail.component';
import {RouterModule, Routes} from "@angular/router";
import { ExtractIdPipe } from './pipes/extract-id.pipe';

const routes: Routes = [
  { path: '', component: PokemonComponent },
  { path: ':id', component: DetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    FilterPokemonPipe,
    DetailComponent,
    ExtractIdPipe
  ],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }),
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
