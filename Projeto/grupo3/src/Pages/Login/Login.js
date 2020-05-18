import React, { useState } from 'react'
import './Login.css'
import {Button, Nav, NavDropdown, Navbar, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom'

export default function Login() {
    const usuario = 'Grupo 3'
    const senha = 'Grupo3';

    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const history = useHistory();

    function handleSubmit(){
        
        if (username === usuario && password === senha) {
            history.push('cadastromidia')
        }
        else{
            if (username !== usuario){
                alert('Usuário inválido');
            }
            else if(password !== senha){
                alert('Senha Inválida');
            }
        }
    }
    return (

        <div className='fundo'>

            <div className='header rounded'>
            </div>
            <div className='body'>
                <div className='box'>
                    <h1 className = 'title'>Eu já vi isso !</h1>
                    <div className='login'>
                        <input className='input' placeholder='Usuário' onChange={(e) => setUserName(e.target.value)} ></input>
                        <input className='input' placeholder='Senha' type = 'password' onChange={(e) => setPassword(e.target.value)} ></input>
                        <a className = 'cadastro' href='http://localhost:3000/cadastrousuario'>Cadastre-se</a>
                        <Button className = 'button' variant = 'secondary' type="submit" onClick={() => handleSubmit()}>Entrar</Button>{' '}
                    </div>
                </div>

                <div className = 'rodape'>
                 <p>Desenvolvido por Grupo 3</p>   
                </div>

            </div>
        </div>
    )
}

