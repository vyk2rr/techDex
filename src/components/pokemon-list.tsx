import { useLoaderData, Link, useNavigate } from 'react-router-dom';
import { PaginatedPokemonsAPIResponse, PokemonListItem } from './../helper/poke-api-handler'
import { useAppSelector } from '../hooks';
import { getIdFromUrl } from '../helper/pokedex-helper';

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

  const startId = getIdFromUrl(pokemons[0].url)

  return (
    <ol start={startId || 1}>
      {pokemons && pokemons.map((pokemon: PokemonListItem) => {
        const pokemonId = getIdFromUrl(pokemon.url)
        if (pokemonId && pokemonId > 151) { return; }
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
