import { useLoaderData, Link } from 'react-router-dom';
import { PokemonItem } from '../helper/poke_api_handler';

export default function PokemonList(): React.ReactNode {
  const pokemons = useLoaderData()

  // key={pokemon.name}
  //             onClick={() => showPokemonPhoto(pokemon, setCurrentPreviwedPokemon)}
  //             onDoubleClick={() => openPokemonDetails(pokemon, setCurrentDetailsViewPokemon)}

  return (
    <ol>
      {pokemons?.results && pokemons?.results.map((pokemon: PokemonItem) => {
        const pokemonIdMatch = /\/([0-9]+)\//.exec(pokemon.url)
        const pokemonId = pokemonIdMatch[1]

        return (
          <li key={`pokemon${pokemonId}`}>
            <Link to={`/pokemon-preview/${pokemonId}`}>
              {pokemon['name']}
            </Link>
          </li>
        )
      })}
    </ol>
  );
}
