import React from 'react'
import CadastroMidias from './Pages/CadastroMidias'
import CadastroUsuario from './Pages/CadastroUsuario'
import ListarMidias from './Pages/ListarMidias'
import ListarMidiasAddPeloUsuario from './Pages/ListarMidiasAddPeloUsuario'
import Login from './Pages/Login'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/cadastromidias" exact component={CadastroMidias} />
                <Route path="/cadastrousuario" exact component={CadastroUsuario} />
                <Route path="/listarmidias" exact component={ListarMidias} />
                <Route path="/listarmidiasusuario" exact component={ListarMidiasAddPeloUsuario} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </BrowserRouter>
    );
}