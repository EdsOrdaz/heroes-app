import { useContext } from "react"
import { HeroList } from "../components/HeroList"
import { SearchContext } from "../../ui/context/searchContext";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";
import { Search } from "../../ui/components/Search";

export const MarvelPage = () => {

  const { heroState: { heroSearch } } = useContext( SearchContext );
  const heroes = getHeroesByName( heroSearch );
  
  return (
    <>
        {
          (heroSearch !== '')
          ? <Search search={ heroSearch } heroes={ heroes } />
          : (
              <>
                <h1>Heroes Marvel</h1>
                <hr />
                <HeroList publisher="Marvel Comics" />
              </>
          )
        }
    </>
  )
}
