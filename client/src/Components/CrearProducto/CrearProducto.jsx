import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Actions/actionsCreators";
import Formulario from "../Formulario/Formulario";


function CrearProducto() {

    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState({
        producto_id: null,
        producto_name: '',
        producto_referencia: '',
        producto_precio: '',
        producto_peso: '',
        producto_categoria: '',
        producto_stock: '',
    })

    const handleForm = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(newProduct))
        if (window.confirm("Se ha agregado un nuevo producto")) {
            window.location.reload()
        } else {
            window.location.reload()
        };
    }


    return (
        <>
            <Formulario handleForm={handleForm} handleSubmit={handleSubmit} newProduct={newProduct}/>
        </>
    )
}

export default CrearProducto