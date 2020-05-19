import React from "react";
import "./cadastroUsuario.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Nav, NavDropdown, Navbar, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap"


export default function cadastroUsuario() {

  return (

    <div className="fundoCU">

      <div className='header rounded' >
        <Navbar className='batba rounded mt-2 mr-2' bg="light" expand="lg">
          <Navbar.Brand>Eu já vi isso !</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href='http://localhost:3000/'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className='box-'>

        <Form className="boxCU" >

          <h1 className="titleCU">Cadastre-se</h1>

          <Form.Group controlId="formGroupName">
            <Form.Control type="name" placeholder="Nome Completo" />
          </Form.Group>

          <Form.Group controlId="formGroupUsername">
            <Form.Control type="Username" placeholder="Usuário" />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Control type="email" placeholder="E-mail" />
          </Form.Group>

          <Form.Group controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>

          <Form.Group controlId="formGroupConfirmPassword">
            <Form.Control type="password" placeholder="Confirmar Senha" />
          </Form.Group>

          <Form.Group controlId="formGroupDate" className='data'>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSexo">
            <Form.Control as="select">
              <option>Gênero</option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </Form.Control>
          </Form.Group>

          <Button type="submit">Cadastrar</Button>{' '}

        </Form>
      </div>
      
      <div className="rodapeCU">
        <p>Desenvolvido por Grupo 3</p>
      </div>

    </div>
  );
}
