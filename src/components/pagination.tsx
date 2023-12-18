import { useLoaderData } from 'react-router-dom';
import { PaginatedPokemonsAPIResponse } from '../helper/poke-api-handler';
import { fetchNextPage } from '../helper/poke-api-handler'
import { getOffsetFromUrl } from '../helper/pokedex-helper';
import { useAppDispatch, useAppSelector } from '../hooks';

export default function Pagination(): React.ReactNode {
  const loaderData: PaginatedPokemonsAPIResponse = useLoaderData() as PaginatedPokemonsAPIResponse

  const previous = useAppSelector(state => state.pokedex.previous)
  const next = useAppSelector(state => state.pokedex.next)

  const previous_url = previous || loaderData.previous
  const next_url = next || loaderData.next

  const offset = getOffsetFromUrl(next_url)
  
  const dispatch = useAppDispatch()

  function goToNextPage(next: string) {
    dispatch(fetchNextPage(next))
  }

  function goToPreviousPage(previous: string) {
    dispatch(fetchNextPage(previous))
  }

  const isPreviousPageDisabled = !previous_url
  const isNextPageDisabled = !next_url || offset > 151

  return (
    <>
      <button
        onClick={() => goToPreviousPage(previous_url)}
        disabled={isPreviousPageDisabled}
      >
        Previous
      </button>
      <button
        onClick={() => goToNextPage(next_url)}
        disabled={isNextPageDisabled}
      >
        Next
      </button>
    </>
  );
}
