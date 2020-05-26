import React, { useState } from 'react'
import './cadastroMidias.css'
import { Button, Form, FormGroup, Alert, Nav, NavDropdown, Navbar, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useHistory } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'

export default function CadastroMidias(props) {

    const [selectedDate, setSelectedDate] = useState(null)

    const [verificador, setVerificador] = useState(1)

    let verify

    const [nomeMidia, setNomeMidia] = useState('')

    const [genero, setGenero] = useState('')

    const [temporadas, setTemporadas] = useState('')

    const [episodios, setEpisodios] = useState('')

    const [duracao, setDuracao] = useState('')

    const [descricao, setDescricao] = useState('')

    const [botao, setbotao] = useState(null)

    const history = useHistory();

    function handleSubmit() {
        history.push('/')

    }

    const user = props.location.state.user
    console.log(user)

    return (

        <div className='fundoCM overflow-hidden'>

            <div className='popup mt-5 mr-5'>

                {(!!nomeMidia == true
                    && !!temporadas == true
                    && !!duracao == true
                    && !!episodios == true
                    && !!selectedDate == true
                    && !!genero == true
                    && !!botao == true
                    && !!descricao == true) &&

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

            <div className='headerrasassar flex rounded' >
                <div className='userrrrrr mt-2 flex flex-column'>
                    <FiUser size={60}/>
                    <p className='logado mb-0'>Logado</p>
                    <p className = 'usersar'>{user}</p>
                </div>


                
                <Navbar className='batbaCA rounded mt-2' bg="light" expand="lg">
                    <Navbar.Brand>Eu já vi isso !</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mr-auto">
                            <Nav.Link href="http://localhost:3000/midias">Mídias cadastradas</Nav.Link>
                            <Nav.Link onClick={() => handleSubmit()}>Sair</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>

            </div>

            <div className='form mt-4'>

                <Form className='cadastromidia'>
                    <label className='tituloCM'>Cadastre sua mídia</label>
                    <Form.Group>

                        <Form.Label className = 'ml-3'>Nome da mídia</Form.Label>

                        <Form.Control placeholder="Ex: Naruto Shippuden"
                            value={nomeMidia}
                            onChange={e => setNomeMidia(e.target.value)}
                        />

                    </Form.Group>

                    <Form.Group>

                        <Form.Label className = 'ml-3'>Selecione o tipo de mídia</Form.Label>

                        <Form.Control as="select" value={verify} onChange={e => setVerificador(e.target.value)}>
                            <option value={verify = 1} ></option>
                            <option value={verify = 1} >Anime</option>
                            <option value={verify = 1} >Série</option>
                            <option value={verify = 0} >Filme</option>
                            <option value={verify = 0} >Documentário</option>
                            <option value={verify = 1} >Desenho animado</option>
                        </Form.Control>

                    </Form.Group>



                    {verificador == 1 &&
                        <div>

                            <Form.Group>
                                <Form.Label className = 'ml-3'>Quatidade de temporadas</Form.Label>
                                <Form.Control placeholder='Ex: 8'
                                    value={temporadas}
                                    onChange={e => setTemporadas(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className = 'ml-3'>Quantidade de episódios</Form.Label>
                                <Form.Control placeholder='Ex: 40'
                                    value={episodios}
                                    onChange={e => setEpisodios(e.target.value)}
                                />
                            </Form.Group>

                        </div>
                    }

                    <Form.Group>

                        <Form.Label className = 'ml-3'>Gênero</Form.Label>

                        <Form.Control placeholder='Ex: Comédia'
                            value={genero}
                            onChange={e => setGenero(e.target.value)}
                        />

                    </Form.Group>

                    <Form.Group>

                        <Form.Label className = 'ml-3'>Data de lançamento</Form.Label>

                        <DatePicker className='calendario'
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            dateFormat='dd/MM/yyyy'
                            showYearDropdown
                            yearDropdownItemNumber
                        />

                    </Form.Group>

                    <FormGroup>

                        <Form.Label className = 'ml-3'>Tempo de duração</Form.Label>

                        <Form.Control placeholder='Tempo em minutos'
                            value={duracao}
                            onChange={e => setDuracao(e.target.value)}
                        />

                    </FormGroup>

                    <Form.Group>

                        <Form.Label className = 'ml-3'>Descrição da mídia</Form.Label>

                        <Form.Control placeholder=''
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)}
                        />
                    </Form.Group>

                    <Button className='botao' onClick={() => setbotao(true)}>Cadastrar</Button>

                </Form>

            </div>

            <div className='rodapeCM'>
                <p>Desenvolvido por Grupo 3</p>
            </div>

        </div>
    );
}



