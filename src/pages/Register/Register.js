import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import  "./Register.module.css";   
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../Services/firebaseConfig";

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  if(loading) {
    return <p>Carregando...</p>
  }
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Workflow " />
        <span>Digite suas informações de cadastro</span>
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

            <button className="button" onClick={handleSignOut}>
              Cadastrar
            </button>

            <div className="footer">
                <p>Já tem uma conta?</p>
                <Link to="/">Acesse sua conta aqui</Link>
            </div>
      </form>
    </div> 
  )
}

export default Register;
