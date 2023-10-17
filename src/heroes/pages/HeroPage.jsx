import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import { useContext, useMemo } from "react";
import { SearchContext } from "../../ui/context/searchContext";
import { Search } from "../../ui/components/Search";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const HeroPage = () => {

  const { heroId } = useParams();
  
  // const hero = getHeroById( heroId );
  const hero = useMemo(() => getHeroById( heroId ), [ heroId ]);


  const navigate = useNavigate();

  const onNavigateback = () => {
    navigate(-1)
  }

  const heroImageUrl = `./heroes/${ heroId }.jpg`;

  

  const { heroState: { heroSearch } } = useContext( SearchContext );
  const heroes = getHeroesByName( heroSearch );

  return (
    <>
      {
          (heroSearch !== '')
          ? <Search search={ heroSearch } heroes={ heroes } />
          : (
              <>
                <div className="row mt-5">
                  <div className="col-4 animate__animated animate__fadeInLeft">
                    <img src={ heroImageUrl } alt={ hero.superhero } 
                    className="img-thumbnail" />
                  </div>
            
                  <div className="col-8">
                    <h3> { hero.superhero }</h3>
                    <ul className="list-group bg-transparent color-primary">
                        <li className="list-group-item bg-transparent text-white"> <b> Nombre:</b> { hero.alter_ego }</li>
                        <li className="list-group-item bg-transparent text-white"> <b> Editor:</b> { hero.publisher }</li>
                        <li className="list-group-item bg-transparent text-white"> <b> Primera aparicion:</b> { hero.first_appearance }</li>
                    </ul>
            
            
                    <h5 className="mt-3"> Nombres </h5>
                    <p> { hero.characters }</p>
                    
                    <button 
                      className="btn btn-outline-primary"
                      onClick={ () => onNavigateback() }
                      >
                        Regresar
                    </button>
                  </div>
                </div>
              </>
          )
        }
    </>
  )
}



