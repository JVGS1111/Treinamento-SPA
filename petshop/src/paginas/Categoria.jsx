import React, { useState, useEffect } from 'react'
import ListaCategorias from '../componentes/ListaCategorias'
import ListaPost from '../componentes/ListaPost'
import '../assets/css/blog.css'
import { Route, useParams, useRouteMatch, Link, Switch } from 'react-router-dom'
import { busca } from '../api/Api'
import SubCategoria from './Subcategoria'


const Categoria = () => {
    const { url, path } = useRouteMatch()
    const { id } = useParams()
    console.log(url);
    const [subcategorias, setSubCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias)
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
                    subcategorias.map((subcategoria) => (
                        <li
                            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
                            key={subcategoria}
                        >
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))

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
