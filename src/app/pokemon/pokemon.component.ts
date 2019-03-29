import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  query: string = '';

  filter: string = '';

  pokemons: Pokemon[] = [];

  constructor(private _pokeService: PokemonService) {}

  ngOnInit() {
    this._pokeService.getPokemons()
      .subscribe((res: object) => {
        this.pokemons = res['results'];
        console.log(this.pokemons)
      })
  }

  performGO() {
    const pokemon: Pokemon[] = this.pokemons.filter((e) => {
      return e.name.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1;
    });

    pokemon.forEach((p: Pokemon) => {
      console.log(`(${p.url})[${p.name}]`)
    });
  }
}
