import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateProduct } from "../../Actions/actionsCreators";
import { useNavigate } from 'react-router-dom';
import Formulario from "../Formulario/Formulario";

function ProductPage() {
    const location = useLocation().state;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [newProduct, setNewProduct] = useState({
        producto_id: location.producto_id,
        producto_name: location.producto_name,
        producto_referencia: location.producto_referencia,
        producto_precio: location.producto_precio,
        producto_peso: location.producto_peso,
        producto_categoria: location.producto_categoria,
        producto_stock: location.producto_stock,
    })

    const handleForm = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct(newProduct))
        if (window.confirm("Se ha actualizado un producto")) {
            navigate('/');
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

export default ProductPage