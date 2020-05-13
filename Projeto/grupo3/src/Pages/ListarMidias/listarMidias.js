import React from 'react'
import './listarMidias.css'
import { Button, Form, FormGroup, FormLabel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ListarMidias() {
    return (
        <div className='back'>
            <div className='header'>
                <a className='ln'>Login</a>
                <a className='cadu'>Cadastrar Usuário</a>
                <a className='cadm'>Cadastrar Mídias</a>
            </div>
            <div className='body'>
                <h1>Mídias cadastradas</h1>
                <ul>
                    <li>
                        <strong>Nome da mídia</strong>
                        <p>Mídia teste</p>

                        <strong>Tipo da mídia</strong>
                        <p>Tipo da mídia teste</p>

                        <strong>Quantidade de episódios</strong>
                        <p>Quantidade de episódios teste</p>

                        <strong>Gênero</strong>
                        <p>Gênero teste</p>

                        <strong>Data de lançamento</strong>
                        <p>Data de lançamento teste</p>

                        <strong>Tempo de duração</strong>
                        <p>Tempo de duração teste</p>
                    </li>
                    <li>
                        <strong>Nome da mídia</strong>
                        <p>Mídia teste</p>

                        <strong>Tipo da mídia</strong>
                        <p>Tipo da mídia teste</p>

                        <strong>Quantidade de episódios</strong>
                        <p>Quantidade de episódios teste</p>

                        <strong>Gênero</strong>
                        <p>Gênero teste</p>

                        <strong>Data de lançamento</strong>
                        <p>Data de lançamento teste</p>

                        <strong>Tempo de duração</strong>
                        <p>Tempo de duração teste</p>
                    </li>
                </ul>
            </div>
            <footer>
                <h3>Criado pelo Grupo3</h3>
            </footer>
        </div >
    )
}
