import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PokemonService} from "../../pokemon.service";
import {switchMap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  pokemon$: Observable<any>;

  constructor(private route: ActivatedRoute, private router: Router, private pokeService: PokemonService) {
  }

  ngOnInit() {
    this.pokemon$ = this.route.paramMap.pipe(switchMap(
      (params: ParamMap) => this.pokeService.getPokemon(Number(params.get('id'))))
    );
  }
}
