import React from 'react'
import logoCarrito from '/assets/carrito-de-compras.png'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/Cart/CartContext'

/* Este componente CartWidget muestra un icono de carrito de compras y el número total de artículos en el carrito, utilizando un valor obtenido del contexto CartContext. */

const CartWidget = () => {
    const {totalCuantityCart} = useContext(CartContext)
    return (
        <div className='seccion-carrito'>
            <Link to='/cart'>
                <img src={logoCarrito} alt="carrito de compra" className='logo-carrito' />
            </Link>
            <span className='contador-carrito'>{totalCuantityCart}</span>
        </div>
    )
}


export default CartWidget