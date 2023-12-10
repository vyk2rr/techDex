import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { loadPaginatedPokemons, loadPokemonDetailsById } from './helper/poke_api_handler'

import PokeLayout from './components/poke-dex-layout'
import Index from "./components/index"
import PokemonDetails from './components/pokemon-details'

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokeLayout />,
    loader: loadPaginatedPokemons,
    errorElement: <>Errorrrrr</>,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/pokemon-preview/:pokemonId',
        loader: ({ params: { pokemonId } }) => {
          if (!pokemonId) { return; }
          
          const id = parseInt(pokemonId)
          return loadPokemonDetailsById(id)
        },
        element: <PokemonDetails />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
