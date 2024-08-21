import { Outlet } from 'react-router-dom'
import PokemonList from "../pokemon-list/pokemon-list";
import Pagination from "../pagination/pagination";
import './poke-dex-root.css';

export default function PokeDexRoot(): JSX.Element {

  return (
    <div className='layout'>
      <div id="sidebar">
        <Pagination />
        <PokemonList />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
