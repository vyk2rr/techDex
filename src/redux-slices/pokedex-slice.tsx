import { createSlice } from '@reduxjs/toolkit'
import { PokemonListItem, fetchNextPage } from '../helper/poke-api-handler'

interface PokedexState {
  previous: string | undefined,
  next: string | undefined,
  pokemons: Array<PokemonListItem> | undefined
}

const initialState: PokedexState = {
  previous: undefined,
  next: undefined,
  pokemons: undefined
}

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNextPage.fulfilled, (state, action) => {
      state.next = action.payload.next
      state.previous = action.payload.previous
      state.pokemons = action.payload.results
    })
  }
})

export const { } = pokedexSlice.actions

export default pokedexSlice.reducer