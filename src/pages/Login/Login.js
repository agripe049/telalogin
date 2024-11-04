import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import  "./Login.module.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

function Login() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Workflow " />
        <span>Digite suas credenciais para acessar o sistema</span>
      </header>

      <form>
            <div className="inputContainer">
                <label htmlFor="email">E-mail</label>
                <input 
                  type="text" 
                  name="email" 
                  id="email" 
                  placeholder="Digite seu e-mail"/>
            </div>
    
            <div className="inputContainer">
                <label htmlFor="password">Senha</label>
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="************"/>
            </div>

            <a href="">Esqueceu a senha?</a>

            <button className="button">
              Entrar
            </button>

            <div className="footer">
                <p>Não tem uma conta?</p>
                <Link to="/register">Crie agora sua conta</Link>
            </div>
      </form>
    </div> 
  )
}

export default Login;
