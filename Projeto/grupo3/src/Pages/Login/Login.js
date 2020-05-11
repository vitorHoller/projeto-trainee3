import React from 'react'
import './Login.css'

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
                        <button className = 'button'>Logar</button>
                    </div>

                </div>
                <div className = 'rodape'>
                 <p>Criado por Grupo 3</p>   
                </div>

            </div>
        </div>
    )
}

