import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pokemon} from "./pokemon/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  apiUrl: string = `https://pokeapi.co/api/v2/pokemon`;

  constructor(private _http: HttpClient) { }

  getPokemons() {
    return this._http.get(this.apiUrl);
  }

  getPokemon(id: string): Observable<Pokemon> {
    return this._http.get<Pokemon>(`${this.apiUrl}/${id}`);
  }
}
