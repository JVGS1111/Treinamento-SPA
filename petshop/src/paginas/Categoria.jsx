import React, { useEffect, useState } from 'react'
import ListaCategorias from '../componentes/ListaCategorias'
import '../assets/css/blog.css'
import ListaPost from '../componentes/ListaPost'
import { Route, useParams, useRouteMatch, Link, Switch } from 'react-router-dom'
import { busca } from '../api/Api'
import SubCategoria from './Subcategorias'

const Categoria = () => {
    const { url, path } = useRouteMatch()
    const { id } = useParams()
    const [subcategorias, setSubcategorias] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubcategorias(categoria.subcategorias)
        })
    }, [id])

    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>

            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {
                    subcategorias.map(subcategoria => {
                        return (
                            <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
                                <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`} />
                </Route>
                <Route exact path={`${path}/:subcategoria`}>
                    <SubCategoria />
                </Route>
            </Switch>
        </>
    )
}

export default Categoria