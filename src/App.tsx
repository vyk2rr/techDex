import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { loadFirstPageOfPokemons, loadPokemonDetailsById } from './helper/poke-api-handler'

import { Provider } from "react-redux"
import { store } from './store'

import PokeDexRoot from './components/poke-dex-root'
import Index from "./components/index"
import PokemonPreview from './components/pokemon-preview'
import PokemonFullPreview from './components/pokemon-full-preview'

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokeDexRoot />,
    loader: loadFirstPageOfPokemons,
    errorElement: <>Errorrrrr</>,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/pokemon-preview/:pokemonId',
        loader: async ({ params: { pokemonId } }) => {
          if (pokemonId === undefined) {
            throw new Error('Pokemon Not Found');
          }

          const id = parseInt(pokemonId)

          if (id <= 0) {
            throw new Error('Pokemon Not Found');
          }

          return loadPokemonDetailsById(id)
        },
        element: <PokemonPreview />
      },
      {
        path: '/pokemon-full-preview/:pokemonId',
        loader: async ({ params: { pokemonId } }) => {
          if (pokemonId === undefined) {
            throw new Error('Pokemon Not Found');
          }

          const id = parseInt(pokemonId)

          if (id <= 0) {
            throw new Error('Pokemon Not Found');
          }

          return loadPokemonDetailsById(id)
        },
        element: <PokemonFullPreview />
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App;
