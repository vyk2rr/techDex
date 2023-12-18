import { useLoaderData } from "react-router-dom";
import { PokemonByIdAPIResponse } from '../helper/poke-api-handler'

export default function PokemonPreview(): JSX.Element {
  const pokemon: PokemonByIdAPIResponse = useLoaderData() as PokemonByIdAPIResponse
  return (
    <>
      <h2>{pokemon.name}</h2>
      <img src={`${pokemon.sprites.back_default}`} />
    </>
  );
}
