import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import  "./Login.module.css";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../Services/firebaseConfig";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [SignInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    SignInWithEmailAndPassword(email, password);
  }

  if(loading) {
    return <p>Carregando...</p>
  }
  if(user) {
    return console.log(user)
  }

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
                  placeholder="Digite seu e-mail"
                  onChange={(e) =>setEmail(e.target.value)}/>
                  
            </div>
    
            <div className="inputContainer">
                <label htmlFor="password">Senha</label>
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="************"
                  onChange={(e) =>setPassword(e.target.value)}/>
                  
            </div>

            <a href="">Esqueceu a senha?</a>

            <button className="button" onClick={handleSignIn}>
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
