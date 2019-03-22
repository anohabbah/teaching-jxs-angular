import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient) { }

  getPokemons() {
    return this._http.get(`https://pokeapi.co/api/v2/pokemon`);
  }
}
