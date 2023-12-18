import { Outlet } from 'react-router-dom'
import PokemonList from "./pokemon-list";
import Pagination from "./pagination";

export default function PokeDexRoot(): JSX.Element {

  return (
    <>
      <div id="sidebar">
        <Pagination />
        <PokemonList />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
