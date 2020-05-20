import React from 'react'
import './listarMidias.css'
import { Table, Nav, NavDropdown, Navbar, FormControl, Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FiEdit } from 'react-icons/fi'

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
                    La Casa de Papel
                    <Button className='iconedeEditar d-flex ml-1 btn-sm'>
                        <FiEdit size={16} />
                    </Button>
                </Modal.Title>

            </Modal.Header>

            <Modal.Body className='topicosdaMidia'>

                <strong>Quantidade de Episódios</strong>
                <p>38</p>

                <strong>Gênero</strong>
                <p>Suspense</p>

                <strong>Data de Lançamento</strong>
                <p>01/01/01</p>

                <strong>Tempo de Duração</strong>
                <p>45 minutos</p>

                <strong>Descrição</strong>
                <p>Série muito doida!</p>

            </Modal.Body>

            <Modal.Footer>

                <Button className='m-auto' onClick={props.onHide}>Fechar</Button>

            </Modal.Footer>

        </Modal>
    );
}

export default function ListarMidias() {

    const [modalShow, setModalShow] = React.useState(false);

    return (

        <div className='back overflow-hidden'>

            <div className='headerr rounded'>

                <Navbar className='batbaLM rounded mt-2 mr-2' bg="light" expand="lg">

                    <Navbar.Brand>Eu já vi isso!!</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mr-auto">
                            <Nav.Link href='http://localhost:3000/'>Login</Nav.Link>
                            <Nav.Link href='http://localhost:3000/cadastrousuario'>Cadastrar Usuário</Nav.Link>
                            <Nav.Link href="http://localhost:3000/cadastromidia">Cadastrar Mídias</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>

            </div>

            <div className='mt-3'>

                <h1 className='titulo p-3 pr-5 pl-5 rounded ml-auto mr-auto m-3 mb-4'>Mídias cadastradas</h1>

                <div className='tabelaheight mr-auto ml-auto'>

                    <Table striped bordered variant='dark'>

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

                                <>

                                    <Button
                                        variant="outline-light mt-3"
                                        className='text-white bg-dark w-75'
                                        onClick={() => setModalShow(true)}>
                                        Clique Aqui
                                 </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />

                                </>

                            </tr>

                        </tbody>

                    </Table>

                </div>

            </div>

            <div className='rodapeLM'> Desenvolvido por Grupo3 </div>

        </div >
    )
}
