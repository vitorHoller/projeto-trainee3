import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './Pages/Login/Login'
import CadastroMidias from './Pages/CadastroMidias/cadastroMidias'
import CadastroUsuario from './Pages/CadastroUsuario/cadastroUsuario'
import ListarMidias from './Pages/ListarMidias/listarMidias'

/*
import ListarMidias from './Pages/ListarMidias'
import ListarMidiasAddPeloUsuario from './Pages/ListarMidiasAddPeloUsuario/listarMidiasAddPeloUsuario'
*/



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/CadastroUsuario" exact component={CadastroUsuario} />
               {/* <Route path="/cadastrousuario" exact component={CadastroUsuario} />
                <Route path="/listarmidias" exact component={ListarMidias} />
                <Route path="/listarmidiasusuario" exact component={ListarMidiasAddPeloUsuario} /> */}
                <Route path="/login" exact component={Login} />
                <Route path = '/cadastromidia' exact component = {CadastroMidias}/>
                <Route path = '/midias' exact component = {ListarMidias} />
            </Switch>
        </BrowserRouter>
    );
}