import axios from 'axios'

interface PokemonListItem {
  name: string
  url: string
}

interface PaginatedPokemonsAPIResponse {
  count: number
  next: string
  previous: string
  results: Array<PokemonListItem>
}

interface PokemonByIdAPIResponse {
  abilities: PokemonAbility[]
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

interface PokemonAbility { }
interface PokemonForm { }
interface PokemonIndex { }
interface PokemonMfe { }
interface PokemonSpecies { }

interface PokemonItemSprites {
  back_default: string
  // many fields ommited ...
}

interface PokemonStat { }
interface PokemonType { }



export async function loadPaginatedPokemons(): PaginatedPokemonsAPIResponse {
  const response = await axios.get<PaginatedPokemonsAPIResponse>('https://pokeapi.co/api/v2/pokemon/')
  if (response.data) {
    return response.data
  }
}

export async function loadPokemonDetailsById(pokemonId: Number): PokemonByIdAPIResponse {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  if (response.data) {
    return response.data
  }
}