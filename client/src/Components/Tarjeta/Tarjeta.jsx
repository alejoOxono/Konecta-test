function Tarjeta({element}) {
    return (
        <div>
            <p><b>ID</b>{element.producto_id}</p>
            <p><b>Nombre: </b>{element.producto_name}</p>
            <p><b>REF: </b>{element.producto_referencia}</p>
            <p><b>Precio:</b>{element.producto_precio}</p>
            <p><b>Peso:</b>{element.producto_peso}</p>
            <p><b>Categoria: </b>{element.producto_categoria}</p>
            <p><b>Stock: </b>{element.producto_stock}</p>
            <p><b>Fecha: </b>{element.fecha.slice(0, 10)}</p>
        </div>
    )
}

export default Tarjeta