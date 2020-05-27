import React, { useState } from 'react'
import './listarMidias.css'
import { Table, Nav, NavDropdown, Navbar, FormControl, Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FiEdit } from 'react-icons/fi'
import { useHistory, Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'


export default function ListarMidias(props) {

    const [Verify, setVerify] = useState()

    const history = useHistory()

    const [NomedaMidia, setNomedaMidia] = useState('')

    const [QntdeTemporadas, setQntdeTemporadas] = useState('')

    const [QntdeEpisodios, setQntdeEpisodios] = useState('')

    const [Genero, setGenero] = useState('')

    const [DatadeLancamento, setDatadeLancamento] = useState('')

    const [TempodeDuracao, setTempodeDuracao] = useState('')

    const [Descricao, setDescricao] = useState('')

    function MyVerticallyCenteredModal(props) {

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Header closeButton>

                    <Modal.Title id="contained-modal-title-vcenter">
                        {NomedaMidia}
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body className='topicosdaMidia'>

                    {Verify === 1 &&

                        <>

                            <strong>Quantidade de Temporadas</strong>
                            <p>{QntdeTemporadas}</p>

                            <strong>Quantidade de Episódios</strong>
                            <p>{QntdeEpisodios}</p>

                            <strong>Gênero</strong>
                            <p>{Genero}</p>

                            <strong>Data de Lançamento</strong>
                            <p>{DatadeLancamento}</p>

                            <strong>Tempo de Duração</strong>
                            <p>{TempodeDuracao}</p>

                            <strong>Descrição</strong>
                            <p>{Descricao}</p>

                        </>

                    }

                    {Verify === 0 &&

                        <>

                            <strong>Gênero</strong>
                            <p>{Genero}</p>

                            <strong>Data de Lançamento</strong>
                            <p>{DatadeLancamento}</p>

                            <strong>Tempo de Duração</strong>
                            <p>{TempodeDuracao}</p>

                            <strong>Descrição</strong>
                            <p>{Descricao}</p>

                        </>

                    }
                </ Modal.Body>
                <Modal.Footer>

                    <Button className='editarInfo mr-5'>Editar</Button>
                    <Button className='fecharInfo mr-5 ml-5' onClick={props.onHide}>Fechar</Button>

                </Modal.Footer>

            </Modal>
        );
    }

    function Verificador(tipo) {
        if (tipo === "serie" || tipo === "anime" || tipo === "desenho animado") {
            setVerify(1)
        }
        else if (tipo === "documentario" || tipo === "filme") {
            setVerify(0)
        }
    }

    function SetarLaCasadePapel() {
        setNomedaMidia("La Casa de Papel")
        setQntdeTemporadas("4")
        setQntdeEpisodios("38")
        setGenero("Suspense")
        setDatadeLancamento("01/01/01")
        setTempodeDuracao("45 minutos")
        setDescricao("Série que mostra toda o drama de assatos feitos por ladrões mascarados na Espanha")
    }

    function SetarTheWalkingDead() {
        setNomedaMidia("The Walking Dead")
        setQntdeTemporadas("10")
        setQntdeEpisodios("115")
        setGenero("Sobrevivência/Zombies")
        setDatadeLancamento("02/02/02")
        setTempodeDuracao("50 minutos")
        setDescricao("Série que mostra um grupo de pessoas tentando sobreviver a um apocalipse")
    }

    function SetarTitanic() {
        setNomedaMidia("Titanic")
        setGenero("Drama")
        setDatadeLancamento("05/05/05")
        setTempodeDuracao("3:15")
        setDescricao("Relata o drama passado pelas pessoas que estavam abordo de um navio após este colidir com um iceberg")
    }

    function SetarResgate() {
        setNomedaMidia("Resgate")
        setGenero("Ação")
        setDatadeLancamento("07/07/07")
        setTempodeDuracao("2:10")
        setDescricao("O filme mostra toda a aventura passado por homem que tenta salvar a vida do filho do seu chefe")
    }

    function SetarDocumentario() {
        setNomedaMidia("Arizona, a pior prisão do mundo")
        setGenero("Television Documentary")
        setDatadeLancamento("18/06/1999")
        setTempodeDuracao("49 minutos")
        setDescricao("Mostra o cotidiano de umas prisões mais seguras do mundo")
    }

    function handleSubmit() {
        history.push('/')
    }

    const [modalShow, setModalShow] = React.useState(false);


    const user = props.location.state.user

    function handleObject() {
        history.push({ pathname: '/cadastromidia', state: { user: user } })
    }

    return (

        <div className='back overflow-hidden'>

            <div className='headerr rounded flex'>

                <div className='userrr mt-2 flex flex-column'>
                    <FiUser size={60} className='' />
                    <p className='mb-0'>Logado</p>
                    <p>{user}</p>
                </div>

                <Navbar className='batbaLM rounded mt-2' bg="light" expand="lg">

                    <Navbar.Brand>Eu já vi isso!</Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => handleObject()} >Cadastrar Mídias</Nav.Link>
                            <Nav.Link onClick={() => handleSubmit()}>Sair</Nav.Link>
                        </Nav>


                    </Navbar.Collapse>
                </Navbar>

            </div>

            <div className='tabelaLM'>

                <div className='tabelaLM2'>
                    <h1 className='titulo'>Mídias cadastradas</h1>
                    <div className='tabelaheight mr-auto ml-auto'>

                        <Table variant='dark'>

                            <thead className='titulotabela text-center' >

                                <tr className='text-body'>

                                    <th>#</th>
                                    <th>Nome da Midia</th>
                                    <th>Tipo de Mídia</th>
                                    <th>Detalhes da Mídia</th>

                                </tr>

                            </thead>


                            <tbody className='bodytabela text-center text-dark'>

                                <tr>

                                    <td className='numero pt-3'>1</td>
                                    <td className='pt-3'>La Casa de Papel</td>
                                    <td className='pt-3'>Série</td>



                                    <Button
                                        variant="outline-light mt-3"
                                        className='text-white bg-dark w-75'
                                        onClick={() => {
                                            SetarLaCasadePapel()
                                            Verificador("serie")
                                            setModalShow(true)
                                        }
                                        }>
                                        Clique Aqui
                                             </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </tr>

                                <tr>
                                    <td className='numero pt-3'>2</td>
                                    <td className='pt-3'>The Walking Dead</td>
                                    <td className='pt-3'>Série</td>
                                    <>


                                        <Button
                                            variant="outline-light mt-3"
                                            className='text-white bg-dark w-75'
                                            onClick={() => {
                                                SetarTheWalkingDead()
                                                Verificador("serie")
                                                setModalShow(true)
                                            }
                                            }>
                                            Clique Aqui
                                        </Button>

                                        <MyVerticallyCenteredModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />

                                    </>

                                </tr>

                                <tr>

                                    <td className='numero pt-3'>3</td>
                                    <td className='pt-3'>Titanic</td>
                                    <td className='pt-3'>Filme</td>

                                    <>

                                        <Button
                                            variant="outline-light mt-3"
                                            className='text-white bg-dark w-75'
                                            onClick={() => {
                                                SetarTitanic()
                                                Verificador("filme")
                                                setModalShow(true)
                                            }
                                            }>
                                            Clique Aqui
                                        </Button>

                                        <MyVerticallyCenteredModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />

                                    </>

                                </tr>

                                <tr>

                                    <td className='numero pt-3'>4</td>
                                    <td className='pt-3'>Resgate</td>
                                    <td className='pt-3'>Filme</td>

                                    <>

                                        <Button
                                            variant="outline-light mt-3"
                                            className='text-white bg-dark w-75'
                                            onClick={() => {
                                                SetarResgate()
                                                Verificador("filme")
                                                setModalShow(true)
                                            }
                                            }>
                                            Clique Aqui
                                        </Button>

                                        <MyVerticallyCenteredModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />

                                    </>

                                </tr>

                                <tr>

                                    <td className='numero pt-3'>5</td>
                                    <td className='pt-3'>Arizona, a pior prisão do mundo</td>
                                    <td className='pt-3'>Documentário</td>



                                    <Button
                                        variant="outline-light mt-3"
                                        className='text-white bg-dark w-75'
                                        onClick={() => {
                                            SetarDocumentario()
                                            Verificador("documentario")
                                            setModalShow(true)
                                        }
                                        }>
                                        Clique Aqui
                                        </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />

                                </tr>

                            </tbody>

                        </Table>

                    </div>

                </div>

            </div>


            <div className='rodapeLM'> Desenvolvido por Grupo3 </div>


        </div>

    )
}
