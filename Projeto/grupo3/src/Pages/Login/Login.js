import React from 'react'
import './Login.css'
import {Button, Nav, NavDropdown, Navbar, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login() {

    return (

        <div className='fundo'>

            <div className='header rounded' >
                <Navbar className = 'batba rounded mt-2 mr-2' bg="light" expand="lg"> 
                    <Navbar.Brand>Eu já vi isso !</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href='http://localhost:3000/cadastromidia'>Cadastrar Midias</Nav.Link>
                            <Nav.Link href="http://localhost:3000/midias">Listar Mídias</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>


            <div className='body'>
                <div className='box'>
                    <h1 className = 'title'>Eu já vi isso !</h1>
                    <div className='login'>
                        <input className='input' placeholder='Login'></input>
                        <input className='input' placeholder='Senha' type = 'password'></input>
                        <a className = 'cadastro' href='http://localhost:3000/cadastrousuario'>Cadastre-se</a>
                        <Button className = 'button' variant = 'secondary' type="submit">Entrar</Button>{' '}
                    </div>
                </div>

                <div className = 'rodape'>
                 <p>Desenvolvido por Grupo 3</p>   
                </div>

            </div>
        </div>
    )
}

