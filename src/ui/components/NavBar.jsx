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

    const { buscarHeroe, onInputChange } = useForm({
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

    
    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // handleHeroe( buscarHeroe );
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark p-2 mx-3">
            
            <img src="/logo.png" alt="Bootstrap" width="400" height="100" className='mr-5'/>

            <div className="navbar-collapse ml-5">
                <div className="navbar-nav">

                    <NavLink className="nav-item nav-link" to="/marvel">
                        <h3>Marvel</h3>
                    </NavLink>

                    <NavLink className="nav-item nav-link" to="/dc">
                        <h3>DC</h3>
                    </NavLink>
                    {/* <NavLink className="nav-item nav-link" to="/search">
                        Buscar
                    </NavLink> */}
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav">
                    <span className='nav-item nav-link text-white'><h2>Bienvenido</h2></span> 
                    <span className='nav-item nav-link text-info'> <h2>{ user?.name } </h2> </span>
                </ul>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">

                
                <form className="d-flex mx-5" onSubmit={ onSubmit }>
                    <input className="form-control mx-2" 
                        type="search" 
                        placeholder="Buscar Heroe" 
                        aria-label="Search" 
                        name="buscarHeroe"
                        autoComplete='off'
                        value={ buscarHeroe }
                        onChange={ onBuscarHeroe }
                    />
                    {/* <button className="btn btn-outline-info btn-sm" type="submit">Buscar</button> */}
                </form>
                <button className="btn btn-outline-warning btn-sm" onClick={ onLogout }>Cerrar Sesion</button>


            </div>
            
        </nav>
    )
}
