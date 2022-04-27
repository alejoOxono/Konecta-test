import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { deleteProduct, getData } from "../../Actions/actionsCreators";
import Tarjeta from "../Tarjeta/Tarjeta";

function Inventario() {
    const dispatch = useDispatch();
    const dataList = useSelector((state) => state.listProducts);

    const handlerDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteProduct(id))
        if (window.confirm("Se ha eliminado el producto")) {
            window.location.reload()
        } else {
            window.location.reload()
        };
    }

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    return (
        <div>
            {
                dataList.map(element => {
                    return (
                        <div key={element.producto_id}>
                            <Tarjeta element={element}></Tarjeta>
                            <Link to={`/producto/${element.producto_id}`} state={element}>
                                <button type='button'>Actualizar</button>
                            </Link>
                            <button onClick={(e) => handlerDelete(e, element.producto_id)}>Borrar</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Inventario