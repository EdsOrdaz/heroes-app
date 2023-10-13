import { useContext } from "react";
import { SearchContext } from "../../ui/context/searchContext";
import { HeroList } from "../components/HeroList"
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";
import { Search } from "../../ui/components/Search";

export const DcPage = () => {
  const { heroState: { heroSearch } } = useContext( SearchContext );
  const heroes = getHeroesByName( heroSearch );
  return (
    <>
        {
          (heroSearch !== '')
          ? <Search search={ heroSearch } heroes={ heroes } />
          : (
                <>
                  <h1>Heroes DC</h1>
                  <hr />
                  <HeroList publisher="DC Comics" />
                </>
          )
        }
    </>
  )
}
