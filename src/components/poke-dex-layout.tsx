import { Outlet } from 'react-router-dom'
import PokemonList from "./pokemon-list";

export default function PokeLayout(): JSX.Element {
  return (
    <>
      <div id="sidebar">
        <PokemonList />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
