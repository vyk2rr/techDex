import { useLoaderData, Link, useNavigate } from 'react-router-dom';
import { PaginatedPokemonsAPIResponse, PokemonListItem } from './../helper/poke-api-handler'
import { useAppSelector } from '../hooks';

export default function PokemonList(): React.ReactNode {
  const pokemonsFromLoader: PaginatedPokemonsAPIResponse = useLoaderData() as PaginatedPokemonsAPIResponse
  const navigate = useNavigate()

  const pokemonsFromState = useAppSelector(state => state.pokedex.pokemons)
  let pokemons: Array<PokemonListItem> | undefined = undefined;

  if (pokemonsFromState) {
    pokemons = pokemonsFromState
  } else {
    pokemons = pokemonsFromLoader.results
  }

  const firstIdMatches = /\/([0-9]+)\//.exec(pokemons[0].url)
  const startId = firstIdMatches && parseInt(firstIdMatches[1])

  return (
    <ol start={startId || 1}>
      {pokemons && pokemons.map((pokemon: PokemonListItem) => {
        const pokemonIdMatches = /\/([0-9]+)\//.exec(pokemon.url)
        if (pokemonIdMatches == null) return;
        const pokemonId = parseInt(pokemonIdMatches[1])
        if (pokemonId > 151) {
          return;
        }
        return (
          <li key={`pokemon${pokemonId}`}>
            <Link to={`/pokemon-preview/${pokemonId}`} onDoubleClick={() =>
              navigate(`/pokemon-full-preview/${pokemonId}`)
            }>
              {pokemon['name']}
            </Link>
          </li>
        )
      })}
    </ol>
  );
}
