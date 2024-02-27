import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface PokemonApi {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor(private http: HttpClient) {}
  private basePokemonUrl = 'https://pokeapi.co/api/v2/';
  // fetchPokemonList(): Observable<PokemonApi[]> {
  //   return this.http.get<any[]>(this.basePokemonUrl + '/' + 'pokemon');
  // }

  getPokemon(): Observable<PokemonApi[]> {
    return this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon-species')
      .pipe(map((response) => response.results as PokemonApi[]));
  }

  fetchPokemonDetails(pokemonName: string): Observable<PokemonApi> {
    return this.http.get<PokemonApi>(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
  }
}
