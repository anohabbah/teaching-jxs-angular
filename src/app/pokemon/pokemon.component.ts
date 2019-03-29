import {Component, OnInit} from '@angular/core';
import _ from 'lodash';
import {Pokemon} from "./pokemon";
import {PokemonService} from "../pokemon.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  query: string = '';

  pokemons: Pokemon[] = [];
  private pokemon$: Observable<Pokemon>;

  constructor(private _pokeService: PokemonService) {
  }

  ngOnInit() {
    this._pokeService.getPokemons()
      .subscribe((res: object) => {
        this.pokemons = res['results'];
        console.log(this.pokemons)
      })
  }

  searchQuery(id?: string) {
    this.pokemon$ = this._pokeService.getPokemon(id || this.query)
  }

  findDetail(url: string) {
    const arr: string[] = url.split('/');
    arr.pop();
    const pokeId = _.last(arr);

    this.searchQuery(pokeId)
  }
}
