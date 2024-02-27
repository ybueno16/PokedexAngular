import { Component, OnInit } from '@angular/core';
import {
  PokemonApi,
  PokemonApiService,
} from '../pokemonApiService/pokemon-api.service';

@Component({
  selector: 'app-pokemon-list-component',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonApi[] = [];

  constructor(private pokemonAPi: PokemonApiService) {}

  ngOnInit(): void {
    this.pokemonAPi.getPokemon().subscribe((pokemons) => {
      this.pokemons = pokemons;
      console.log(pokemons);
    });
  }
}
