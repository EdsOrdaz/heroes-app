import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

  const { heroId } = useParams();
  
  // const hero = getHeroById( heroId );
  const hero = useMemo(() => getHeroById( heroId ), [ heroId ]);

  if( !hero ){
    return <Navigate to="/marvel" />
  }

  const navigate = useNavigate();

  const onNavigateback = () => {
    navigate(-1)
  }

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__fadeInLeft">
        <img src={ `/assets/heroes/${ heroId }.jpg` } alt={ hero.superhero } 
        className="img-thumbnail" />
      </div>

      <div className="col-8">
        <h3> { hero.superhero }</h3>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b> Nombre:</b> { hero.alter_ego }</li>
            <li className="list-group-item"> <b> Editor:</b> { hero.publisher }</li>
            <li className="list-group-item"> <b> Primera aparicion:</b> { hero.first_appearance }</li>
        </ul>


        <h5 className="mt-3"> Nombres </h5>
        <p> { hero.characters }</p>
        
        <button 
          className="btn btn-outline-primary"
          onClick={ () => onNavigateback() }
          >
            Back
        </button>
      </div>
    </div>
  )
}
