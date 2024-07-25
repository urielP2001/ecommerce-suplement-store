import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ItemsListContainer.css'
import ItemsList from '../ItemsList/ItemsList'
import Loader from '../Loader/Loader'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { categoria } = useParams()               /* Utiliza el hook useParams para obtener los parámetros de la URL. */
    const [loading,setLoading] = useState(true)     /* Define el estado loading, que se inicializa como true y se usa para indicar si los datos están siendo cargados. */

    useEffect(() => {

        (async () => {
            setLoading(true)
            const db = getFirestore()

            if (!categoria) {                       /* Si categoria no está definida, obtiene todos los productos de la colección productos. */
                const docsRef = collection(db, "productos")
                const querySnapshop = await getDocs(docsRef)
                setProductos(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
            } else {                                /* Si categoria está definida, obtiene solo los productos que pertenecen a la categoría especificada. */
                const docsRef = collection(db, "productos")
                const q = query(docsRef, where("categoria", "==", categoria))
                const querySnapshop = await getDocs(q)
                setProductos(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
            }
            setLoading(false)
        })()

    }, [categoria])

    if (loading) return <Loader /> /* retorna el componente Loader depende de su estado: true o false */


    return (
        <div className='seccion-listContainer'>

            {productos.length == 0 ?

                <Loader />

                :

                <ItemsList productos={productos} />
            }
        </div>
    )
}

export default ItemListContainer