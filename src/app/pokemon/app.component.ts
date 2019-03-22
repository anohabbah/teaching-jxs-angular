import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  query: string = '';

  filter: string = '';

  pokemons: Pokemon[] = [];

  constructor(private _pokeService: PokemonService) {}

  ngOnInit() {
    this._pokeService.getPokemons()
      .subscribe((res: object) => {
        this.pokemons = res['results'];
      })
  }

  performGO() {
    const pokemon: Pokemon[] = this.pokemons.filter((e) => {
      return e.name.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1;
    });

    pokemon.forEach((p: Pokemon) => {
      console.log(`(${p.name})[${p.name}]`)
    });
  }
}
