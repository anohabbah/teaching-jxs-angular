import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonComponent as PokemonComponent } from './pokemon/pokemon.component';
import { FilterPokemonPipe } from './pipes/filter-pokemon.pipe';
import {HttpClientModule} from "@angular/common/http";
import {PokemonService} from "./pokemon.service";
import { ExtractIdPipe } from './pipes/extract-id.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    FilterPokemonPipe,
    ExtractIdPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
