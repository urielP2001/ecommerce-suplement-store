import React, { useState } from 'react'
import './Checkout.css'


const Checkout = ({ ordenCompleta }) => {

    /* son las funciones para actualizar estos estados, respectivamente. */

    const [nombreComprador, setNombreComprador] = useState("")
    const [telefonoComprador, setTelefonoComprador] = useState("")
    const [emailComprador, setEmailComprador] = useState("")

    const handleCompleteOrder = async (e) => {
        e.preventDefault()      /* Evita que el formulario se envíe de forma predeterminada, lo que evitaría que la página se recargue. */
        const comprador = {
            name: nombreComprador,
            tel: telefonoComprador,
            email: emailComprador
        }

        await ordenCompleta(comprador)
    }

    return (

        /* este componente Checkout renderiza un formulario para que el usuario ingrese su información de contacto y, al enviar el formulario, recopila los datos y llama a la función ordenCompleta con la información del comprador para completar la compra. */


<form className='formulario-compra' onSubmit={(e) => handleCompleteOrder(e)}>
            <input 
                type="text" 
                value={nombreComprador} 
                onChange={(e) => setNombreComprador(e.target.value)} 
                placeholder='Ingrese su nombre y apellido' 
                required 
                className='input-compra'
            />
            <input 
                type="telephone" 
                value={telefonoComprador} 
                onChange={(e) => setTelefonoComprador(e.target.value)} 
                placeholder='Ingrese su teléfono' 
                required 
                className='input-compra'
            />
            <input 
                type="email" 
                value={emailComprador} 
                onChange={(e) => setEmailComprador(e.target.value)} 
                placeholder='Ingrese su email' 
                required 
                className='input-compra'
            />
            <button type='submit' className='boton-finalizar-compra'>Finalizar Compra</button>
        </form>
    )
}

export default Checkout