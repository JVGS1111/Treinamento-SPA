import React, { useEffect, useState } from 'react'
import ListaCategorias from '../componentes/ListaCategorias'
import '../assets/css/blog.css'
import ListaPost from '../componentes/ListaPost'
import { Route, useParams, useRouteMatch } from 'react-router'
import { busca } from '../api/Api'

const Categoria = () => {
    const { path } = useRouteMatch()
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
                <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>

                </li>
            </ul>
            <Route exact path={`${path}/`}>
                <ListaPost url={`/posts?categoria=${id}`} />
            </Route>



        </>
    )
}

export default Categoria