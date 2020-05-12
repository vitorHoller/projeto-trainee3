import React, { useState } from 'react'
import './cadastroMidias.css'
import {Button, Form, FormGroup, FormLabel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function cadastroMidias() {

    return (
        <div className='fundo'>
            <div className='header'>
                <a className = 'cadastro'>Cadastrar Usuário</a>
                <a className = 'lm'>Listar Mídias</a>
                <a className = 'cm'>Cadastrar Mídias</a>
            </div>
            <div className = 'form'>
            <Form className='cadastromidia'>
                    <Form.Group>
                        <Form.Label>Nome da Mídia</Form.Label>
                        <Form.Control placeholder="Ex: Naruto Shippuden" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Selecione o Gênero</Form.Label>
                        <Form.Control as="select">
                            <option></option>
                            <option>Anime</option>
                            <option>Série</option>
                            <option>Filme</option>
                            <option>Documentário</option>
                            <option>Desenho Animado</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Quatidade de Episódios</Form.Label>
                        <Form.Control placeholder = 'Ex: 40' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Gênero</Form.Label>
                        <Form.Control placeholder = 'Ex: Comédia' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Data de Lançamento</Form.Label>
                        {/*colocar datepicker*/}
                    </Form.Group>
                    <FormGroup>
                        <Form.Label>Tempo de duração</Form.Label>
                        <Form.Control placeholder='Tempo em minutos'/>
                    </FormGroup>

                </Form>
            </div>

            
        </div>
    
    )
}


