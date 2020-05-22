import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroMidias from './Pages/CadastroMidias/cadastroMidias'
import CadastroUsuario from './Pages/CadastroUsuario/cadastroUsuario'
import ListarMidias from './Pages/ListarMidias/listarMidias'
import Login from './Pages/Login/Login'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path="/CadastroUsuario" exact component={CadastroUsuario} />
                <Route path = '/cadastromidia' exact component = {CadastroMidias}/>
                <Route path = '/midias' exact component = {ListarMidias} />
            </Switch>
        </BrowserRouter>
    );
}