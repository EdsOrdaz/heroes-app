import { useReducer, useState } from 'react'
import { SearchContext } from '../context/searchContext'
import { searchReduce } from '../context/searchReduce';

export const SearchProvider = ( { children } ) => {

    // const [heroe, setHeroe] = useState();
    const [heroState, dispatch] = useReducer(searchReduce, { heroSearch: '' });

    const handleHeroe = ( hero = '' ) => {
        hero = hero.trim();
        const action = { payload: hero }
        dispatch( action );
    }

  return (
    <SearchContext.Provider value={{
        heroState,
        handleHeroe
    }}>
        { children }
    </SearchContext.Provider>
  )
}
