import { useLoaderData } from "react-router-dom";
import { PokemonByIdAPIResponse } from '../../helper/poke-api-handler'
import './pokemon-preview.css'

export default function PokemonPreview(): JSX.Element {
  const pokemon: PokemonByIdAPIResponse = useLoaderData() as PokemonByIdAPIResponse
  return (
    <div className='pokemon-details'>
      <h2>{pokemon.name}</h2>
      <img src={`${pokemon.sprites.back_default}`} />
    </div>
  );
}
