import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";

import "../css/login.css";

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
      <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
      </div>
      <form className="formlogin" onSubmit={ onLogin }>
        <h3>Login</h3>

        <label>Nombre</label>
        <input type="text" 
            placeholder="Ingresa tu nombre" 
            autoComplete="off"
            name="textLogin"
            value={ textLogin }
            onChange={ handleLogin }
            className="logininput"
          />

        <button className="loginbutton" type="submit">Entrar</button>
      </form>
    </>
  )
}


