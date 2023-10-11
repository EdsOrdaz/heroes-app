import { heroes } from "../data/heroes"

export const getHeroesByName = ( name = '' ) => {
    name = name.toUpperCase().trim();

    if( name.length < 1 ) { return []; }

  return heroes.filter( hero => hero.superhero.toUpperCase().trim().includes( name ) );
}
