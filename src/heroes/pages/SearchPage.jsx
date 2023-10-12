import queryString from 'query-string'
import { useForm } from "../../hooks/useForm"
import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = ''} = queryString.parse( location.search );

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: q
  });

  const heroes = getHeroesByName( q );

  const handleSubmit = (event) => {
      event.preventDefault();
      // if( searchText.trim().length < 1) return;

      navigate(`?q=${ searchText }`);
      // onResetForm();
  }

  return (
    <>
        <h1> Buscar</h1>
        <hr />

        <div className="row">
          <div className="col-5">
              <form onSubmit={ handleSubmit }>
                <input type="text"
                  placeholder="Buscar heroe"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={ searchText }
                  onChange={ onInputChange }
                />
              </form>

              <button type='submit' className="btn btn-outline-primary mt-1">
                  Buscar
              </button>
          </div>

          <div className="col-7">
              <h4> Resultados </h4>
              <hr />

              {
                  ( q === '')
                  ? <div className="alert alert-primary animate__animated animate__fadeInRight"> Buscar heroe </div>
                  : ( heroes.length < 1) 
                      && <div className="alert alert-danger animate__animated animate__fadeInRight">No hay ningun heroe con el nombre <b>{ q }</b></div>
              }
              

              {
                heroes.map( hero => (
                   <HeroCard key={ hero.id } { ...hero } /> 
                ))
              }
          </div>
        </div>
    </>
  )
}
