import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

/* armado de las tarjetas de cada producto, llamando  los datos de la base de datos */

const Item = ({producto}) => {
    return (
        <div className="container-card">
            <div className='container-item'>
                <img src={producto.imagen} alt="imagen del producto" className='imagen-producto'/>
                <h3>{producto.nombre}</h3>
                <p>{producto.marca}</p>
                <span className='precio-producto'>$ {producto.precio}</span>
            
            </div>
            <Link to={`/item/${producto.id}`} className='btn-detalle'>
                Ver detalle
            </Link>
        </div>
        
    )
}

export default Item
