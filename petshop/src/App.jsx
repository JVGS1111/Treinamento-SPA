import React from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './componentes/Cabecalho'
import Post from './paginas/Post'
import Categoria from './paginas/Categoria'

function App() {

  return (
    <>
      <Router>
        <Cabecalho />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/Sobre'>
            <Sobre />
          </Route>

          <Route exact path='/Categoria/:id'>
            <Categoria />
          </Route>

          <Route exact path='/Posts/:id'>
            <Post />
          </Route>

          <Route>
            <Pagina404 />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
