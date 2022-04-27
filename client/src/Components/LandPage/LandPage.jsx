import React from 'react'
import Inventario from '../Inventario/Inventario'
import Ventas from '../Ventas/Ventas'
import { Link } from 'react-router-dom'

function LandPage() {
    return (
        <>
            <div>
                <div>
                    <Link to='/formulario'>
                        <button type='button' >Crear Producto</button>
                    </Link>
                </div>
                <div>
                    <Ventas />
                </div>
            </div>
            <div>
                <Inventario />
            </div>
        </>
    )
}

export default LandPage
