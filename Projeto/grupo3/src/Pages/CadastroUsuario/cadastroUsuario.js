import React from "react";
import "./CadastroUsuario.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col } from "react-bootstrap";
import {Button} from "react-bootstrap"
export default function CadastroUsuario() {
  return (
    <div className="fundoCU">
      <div className="header">
        <a className="loginCU">Login</a>
        <a className="lmCU">Listar Mídias</a>
        <a className="cmCU">Cadastrar Mídias</a>
      </div>
      <div>
        <Form className="boxCU" v>
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
          <Form.Group as={Col} controlId="formGridSexo">
            <Form.Control as="select">
              <option>Sexo</option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </Form.Control>
          </Form.Group>
          <Button type="submit">Cadastrar</Button>{' '}
        </Form>
      </div>
      <div className="rodapeCU">
        <p>Criado por Grupo 3</p>
      </div>
    </div>
  );
}
