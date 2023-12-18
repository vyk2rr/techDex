import { useLoaderData } from "react-router-dom";
import { PokemonByIdAPIResponse } from '../helper/poke-api-handler'

export default function PokemonPreview(): JSX.Element {
  const pokemon: PokemonByIdAPIResponse = useLoaderData() as PokemonByIdAPIResponse

  return (
    <>
      <h2>{pokemon.name} - full details</h2>

      <img src={`${pokemon.sprites.back_default}`} />
      <img src={`${pokemon.sprites.front_default}`} />
      <img src={`${pokemon.sprites.front_shiny}`} />


      <h3>Abilities</h3>
      <ol>
        {pokemon.abilities.map(({ ability }) => <li>{ability.name}</li>)}
      </ol>

      <h3>Base Experience</h3>
      {pokemon.base_experience}

      <h3>Forms</h3>
      <ol>
        {pokemon.forms.map(({ name }) => <li>{name}</li>)}
      </ol>

    </>
  );
}
