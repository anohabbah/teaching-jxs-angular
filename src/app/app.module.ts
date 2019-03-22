import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppComponent as PokemonComponent } from './pokemon/app.component';
import { FilterPokemonPipe } from './filter-pokemon.pipe';
import {HttpClientModule} from "@angular/common/http";
import {PokemonService} from "./pokemon.service";
import { DetailsComponent } from './pokemon/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    FilterPokemonPipe,
    DetailsComponent
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
