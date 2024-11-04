import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import  "./Register.module.css";   

function Register() {
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
