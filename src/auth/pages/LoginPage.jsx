import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const { textLogin, onInputChange } = useForm();

  const handleLogin = ( event ) => {
    onInputChange( event );
  }

  const onLogin = (event) => {
    event.preventDefault();
    if( textLogin.trim() === '' ) { return ; }
    login(textLogin);
    navigate('/marvel', {
      replace: true
    })
  }

  return (
    <>
      <div className="container mt-5">
          <h1>Ingresa tu nombre</h1>
          <br />
          <form onSubmit={ onLogin }>
            <input 
              type="text" 
              className="form-control" 
              autoComplete="off"
              name="textLogin"
              value={ textLogin }
              onChange={ handleLogin }
            />
            <hr />

            <div className="d-grid col-2">
            <button className="btn btn-primary" type="submit">
              Entrar
            </button>
            </div>
          </form>
      </div>
    </>
  )
}
