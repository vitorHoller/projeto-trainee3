import React, { useState } from 'react'
import './cadastroMidias.css'
import { Button, Form, FormGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function CadastroMidias() {

    const [selectedDate, setSelectedDate] = useState(null)

    const [verificador, setVerificador] = useState(1)

    let verify

    const [nomeMidia, setNomeMidia] = useState('')

    const [genero, setGenero] = useState('')

    const [temporadas, setTemporadas] = useState('')

    const [episodios, setEpisodios] = useState('')

    const [duracao, setDuracao] = useState('')


    return (
        <div className='fundo'>

            <div className='header'>
                <a className='cadastro'>Cadastrar Usuário</a>
                <a className='lm'>Listar Mídias</a>
                <a className='cm'>Cadastrar Mídias</a>
            </div>

            <div className='form'>

                <Form className='cadastromidia'>

                    <Form.Group>
                        <Form.Label>Nome da Mídia</Form.Label>
                        <Form.Control placeholder="Ex: Naruto Shippuden" value={nomeMidia} onChange={e => setNomeMidia(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Selecione o Tipo de Mídia</Form.Label>
                        <Form.Control as="select" value={verify} onChange={e => setVerificador(e.target.value)}>
                            <option value={verify = 1} ></option>
                            <option value={verify = 1} >Anime</option>
                            <option value={verify = 1} >Série</option>
                            <option value={verify = 0} >Filme</option>
                            <option value={verify = 0} >Documentário</option>
                            <option value={verify = 1} >Desenho Animado</option>
                        </Form.Control>
                    </Form.Group>
                    


                    {verificador == 1 &&
                        <div>
                            <Form.Group>
                                <Form.Label>Quatidade de Temporadas</Form.Label>
                                <Form.Control placeholder='Ex: 8' value={temporadas} onChange={e => setTemporadas(e.target.value)} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Quantidade de Episódios</Form.Label>
                                <Form.Control placeholder='Ex: 40' value={episodios} onChange={e => setEpisodios(e.target.value)} />
                            </Form.Group>
                        </div>
                    }

                    <Form.Group>
                        <Form.Label>Gênero</Form.Label>
                        <Form.Control placeholder='Ex: Comédia' value={genero} onChange={e => setGenero(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Data de Lançamento</Form.Label>
                        <DatePicker className='calendario'
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            dateFormat='dd/MM/yyyy'
                            showYearDropdown
                            yearDropdownItemNumber
                        />
                    </Form.Group>

                    <FormGroup>
                        <Form.Label>Tempo de duração</Form.Label>
                        <Form.Control placeholder='Tempo em minutos' value={duracao} onChange={e => setDuracao(e.target.value)} />
                    </FormGroup>

                    <Button className='botao' type='submit'>Cadastrar</Button>

                </Form>

            </div>

        </div>

    );
}



