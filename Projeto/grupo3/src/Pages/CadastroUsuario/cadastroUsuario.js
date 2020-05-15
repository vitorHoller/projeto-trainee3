import React from "react";
import "./cadastroUsuario.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col } from "react-bootstrap";
import {Button} from "react-bootstrap"


export default function cadastroUsuario() {
  return (
    <div className="fundoCU">
      <div className="headerCU">
        <a className="loginCU" href='http://localhost:3000'>Login</a>
        <a className="cmCU" href='http://localhost:3000/midias'>Cadastrar Mídias</a>
        <a className="lmCU" href='http://localhost:3000/cadastromidia'>Listar Mídias</a>

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
          <Form.Group controlId="formGroupDate" className='data'>
            <Form.Control  type="date"/>
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
