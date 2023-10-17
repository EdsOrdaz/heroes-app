import { useContext, useEffect } from 'react';
import queryString from 'query-string'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { SearchContext } from '../context/searchContext';

export const Navbar = () => {

    const { user, logout } = useContext( AuthContext );
    const { handleHeroe } = useContext( SearchContext );
    
    const location = useLocation();
    const { q = ''} = queryString.parse( location.search );    

    const { buscarHeroe, onInputChange, onResetForm } = useForm({
        buscarHeroe: ''
    });

    useEffect(() => {
        if( q !== ''){
          handleHeroe( q );
          onInputChange( { target: {
            name: 'buscarHeroe',
            value: q
          }} );
        }
      }, [])

    const navigate = useNavigate();

    const onBuscarHeroe = ( event ) => {
        onInputChange( event );
        const { target: { value }} = event;
        handleHeroe( value );
        if( value === ''){
            navigate( location.pathname );
        } else {
            navigate(`?q=${ value }`);
        }
    };

    const handleResetForm = ( event ) => {
        onResetForm();
        handleHeroe();
    }

    
    const onLogout = () => {
        logout();
        navigate('login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
                <img src="./logo.png" alt="Heroes" width="100" height="50" className='mr-5'/>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-item nav-link" to="./marvel" onClick={ handleResetForm }><h4>Marvel</h4></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-item nav-link" to="./dc" onClick={ handleResetForm }><h4>DC</h4></NavLink>
                        </li>
                    </ul>

                    <div className="navbar-nav me-auto justify-content-center">
                        <ul className="navbar-nav">
                            <span className='nav-item nav-link text-black'><h2>Bienvenido</h2></span> 
                            <span className='nav-item nav-link text-warning'> <h2>{ user?.name } </h2> </span>
                        </ul>
                    </div>

                    <form className="d-flex" role="search">
                    <input className="form-control me-2" 
                            type="search" 
                            placeholder="Buscar Heroe" 
                            aria-label="Search" 
                            name="buscarHeroe"
                            autoComplete='off'
                            value={ buscarHeroe }
                            onChange={ onBuscarHeroe }
                        />
                    </form>
                    <button className="btn btn-danger" onClick={ onLogout } type="submit">Cerrar Sesion</button>
                </div>
            </div>
        </nav>
    )
}
