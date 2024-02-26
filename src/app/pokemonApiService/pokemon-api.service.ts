import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PokemonApi {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor(private http: HttpClient) {}

  fetchPokemonList(): Observable<PokemonApi[]> {
    return this.http.get<any[]>('https://pokeapi.co/api/v2/pokemon');
  }

  fetchPokemonDetails(pokemonName: string): Observable<PokemonApi> {
    return this.http.get<PokemonApi>(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
  }
}
