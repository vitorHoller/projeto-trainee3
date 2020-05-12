import React from 'react'
import './Login.css'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login() {
    return (
        <div className='fundo'>
            <div className='header'>
                <a className = 'cadastro'>Cadastrar Usuário</a>
                <a className = 'lm'>Listar Mídias</a>
                <a className = 'cm'>Cadastrar Mídias</a>
            </div>

            <div className='body'>
                <div className='box'>
                    <h1 className = 'title'>Eu já vi isso!!</h1>
                    <div className='login'>
                        <input className='input' placeholder='Login'></input>
                        <input className='input' placeholder='Senha' type = 'password'></input>
                        <Button className = 'button' variant = 'secondary' type="submit">Log In</Button>{' '}
                    </div>

                </div>
                <div className = 'rodape'>
                 <p>Criado por Grupo 3</p>   
                </div>

            </div>
        </div>
    )
}

