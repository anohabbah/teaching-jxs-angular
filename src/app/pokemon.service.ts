import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  apiUrl: string = `https://pokeapi.co/api/v2/pokemon`;

  constructor(private _http: HttpClient) { }

  getPokemons() {
    return this._http.get(this.apiUrl);
  }

  getPokemon(id: number) {
    return this._http.get(`${this.apiUrl}/${id}`);
  }
}
