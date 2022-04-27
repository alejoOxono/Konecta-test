import { Link } from 'react-router-dom'


function Formulario({handleForm, handleSubmit, newProduct}) {
    return (
        <form onChange={(e) => handleForm(e)}>
            <div>

                <div className="producto">
                    <label htmlFor="name">Nombre</label>
                    <input placeholder={`${newProduct.producto_name}...`} type="text" name="producto_name" id="name" className="form-control" />
                </div>

                <div className="referencia">
                    <label htmlFor="referencia">Referencia</label>
                    <input placeholder={`${newProduct.producto_referencia}...`} type="text" name="producto_referencia" id='referencia' className="form-select" />
                </div>

                <div className="precio">
                    <label htmlFor="precio" >Precio</label>
                    <input placeholder={`${newProduct.producto_precio}...`} type="number" min="1" name="producto_precio" id="precio" className="form-control" />
                </div>

                <div className="peso">
                    <label htmlFor="peso" >Peso</label>
                    <input placeholder={`${newProduct.producto_peso}...`} type="number" min="1" name="producto_peso" id="peso" className="form-control" />
                </div>

                <div className="categoria">
                    <label htmlFor="categoria">Categoria</label>
                    <input placeholder={`${newProduct.producto_categoria}...`} type="text" name="producto_categoria" id='categoria' className="form-select" />
                </div>

                <div className="stock">
                    <label htmlFor="stock" >Stock</label>
                    <input placeholder={`${newProduct.producto_stock}...`} type="number" min="1" name="producto_stock" id="stock" className="form-control" />
                </div>


                <div className="submit">
                    <button type='submit' onClick={(e) => handleSubmit(e)}>Aceptar</button>
                    <Link to='/'>
                        <button type='button' >Volver</button>
                    </Link>
                </div>

                <br />

            </div>
        </form>
    )
}

export default Formulario