import queryString from 'query-string'
import { useForm } from "../../hooks/useForm"
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components';

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
        <h1> Search</h1>
        <hr />

        <div className="row">
          <div className="col-5">
              <h4> Searching </h4>
              <form onSubmit={ handleSubmit }>
                <input type="text"
                  placeholder="Search a hero"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={ searchText }
                  onChange={ onInputChange }
                />
              </form>

              <button type='submit' className="btn btn-outline-primary mt-1">
                  Search
              </button>
          </div>

          <div className="col-7">
              <h4> Results </h4>
              <hr />

              {
                  ( q === '')
                  ? <div className="alert alert-primary animate__animated animate__fadeInRight"> Search a hero </div>
                  : ( heroes.length < 1) 
                      && <div className="alert alert-danger animate__animated animate__fadeInRight">No hero with <b>{ q }</b></div>
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
