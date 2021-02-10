import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = () => {
  let inputUsername = useRef<HTMLInputElement>(null);
  let inputPassword = useRef<HTMLInputElement>(null);
 
  const [nome] = useState("ana");
  const [senha] = useState("123456");
  const [logado, setLogado] = useState(false)
  

  const submitForm = () =>{
    const username = inputUsername.current?.value
    const password = inputPassword.current?.value

    if (nome===username && senha === password) {
      setLogado(true) 
    } else {
      setLogado(false)
    } 
  }

  return(
    <>
      <p>Login</p>
      {
        logado ?
        <Redirect to="/dashboard"/>
        :
        <form action="">
          <input type="text" ref={inputUsername} placeholder="Digite o seu usuário."/> <br/>
          <input type="password" ref={inputPassword} placeholder="Digite a sua senha"/> <br/>
          <button onClick={submitForm}>Enviar</button>
        </form>
      }
      
    </>
  )
}

export default Login;