import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export interface PokemonListItem {
  name: string
  url: string
}

export interface PaginatedPokemonsAPIResponse {
  count: number
  next: string
  previous: string
  results: Array<PokemonListItem>
}

interface PokemonAbility {
  name: string
}

interface PokemonAbilities {
  ability: PokemonAbility,
  is_hidden: boolean,
  slot: number
}

interface PokemonForm {
  name: string
}
interface PokemonIndex { }
interface PokemonMfe { }
interface PokemonSpecies { }

interface PokemonItemSprites {
  back_default: string
  front_default: string
  front_shiny: string
  // many fields ommited ...
}

interface PokemonStat { }
interface PokemonType { }

export interface PokemonByIdAPIResponse {
  abilities: PokemonAbilities[]
  base_experience: number
  forms: PokemonForm[]
  game_indices: PokemonIndex[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: PokemonMfe[]
  name: string
  order: number
  past_abilities: any[]
  past_types: any[]
  species: PokemonSpecies
  sprites: PokemonItemSprites
  stats: PokemonStat[]
  types: PokemonType[]
  weight: number
}

export async function loadFirstPageOfPokemons(): Promise<PaginatedPokemonsAPIResponse> {
  const response = await axios.get<PaginatedPokemonsAPIResponse>('https://pokeapi.co/api/v2/pokemon/')
  if (response.data) {
    return response.data
  }

  throw new Error('Failed to fetch the first page of Pokemons');
}

export async function loadPokemonDetailsById(pokemonId: Number): Promise<PokemonByIdAPIResponse> {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  if (response.data) {
    return response.data
  }

  throw new Error('Failed to fetch the pokemon');
}

export const fetchNextPage = createAsyncThunk('pokedex/fetchNextPage', async (url: string) => {
  const response = await axios.get(url);
  if (response.data) {
    return response.data;
  }

  throw new Error('Failed to fetch Pokemons list');
});
