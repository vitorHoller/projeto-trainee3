import React, { useState } from 'react'
import './cadastroMidias.css'
import { Button, Form, FormGroup, Alert, Nav, NavDropdown, Navbar, FormControl } from 'react-bootstrap'
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

    const [botao, setbotao] = useState(null)


    return (
        <div className='fundoCM overflow-hidden'>
            <div className='popup mt-5 mr-5'>
                {(!!nomeMidia == true
                    && !!temporadas == true
                    && !!duracao == true
                    && !!episodios == true
                    && !!selectedDate == true
                    && !!genero == true
                    && !!botao == true) &&

                    <Alert variant="success">
                        <Alert.Heading>Mídia adicionada com sucesso!!!</Alert.Heading>
                          Você pode verificar a mídia instalada na página de listar as mídias, clique no link abaixo
                          para ser redirecionado
                          <p>
                            <Alert.Link href='http://localhost:3000/midias'>
                                Clique Aqui
                          </Alert.Link>
                        </p>
                    </Alert>
                }

            </div>

            <div className='header rounded' >
                <Navbar className = 'batbaCA rounded mt-2 mr-2' bg="light" expand="lg"> 
                    <Navbar.Brand>Eu já vi isso!!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href='http://localhost:3000/'>Login</Nav.Link>
                            <Nav.Link href='http://localhost:3000/cadastrousuario'>Cadastrar usuário</Nav.Link>
                            <Nav.Link href="http://localhost:3000/midias">Mídias cadastradas</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <div className='form mt-4'>

                <Form className='cadastromidia'>

                    <Form.Group>
                        <Form.Label>Nome da Mídia</Form.Label>
                        <Form.Control placeholder="Ex: Naruto Shippuden"
                            value={nomeMidia}
                            onChange={e => setNomeMidia(e.target.value)}
                        />
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
                                <Form.Control placeholder='Ex: 8'
                                    value={temporadas}
                                    onChange={e => setTemporadas(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Quantidade de Episódios</Form.Label>
                                <Form.Control placeholder='Ex: 40'
                                    value={episodios}
                                    onChange={e => setEpisodios(e.target.value)}
                                />
                            </Form.Group>
                        </div>
                    }

                    <Form.Group>
                        <Form.Label>Gênero</Form.Label>
                        <Form.Control placeholder='Ex: Comédia'
                            value={genero}
                            onChange={e => setGenero(e.target.value)}
                        />
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
                        <Form.Control placeholder='Tempo em minutos'
                            value={duracao}
                            onChange={e => setDuracao(e.target.value)}
                        />
                    </FormGroup>
                    {console.log(!!nomeMidia, !!temporadas, !!duracao, !!episodios, !!selectedDate, !!genero, !!botao)}

                    <Button className='botao' onClick={() => setbotao(true)}>Cadastrar</Button>

                </Form>
            </div>

            <div className='rodapeCM'>
                <p>Desenvolvido por Grupo 3</p>
            </div>

        </div>
    );
}



