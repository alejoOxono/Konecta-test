import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchData, updateProduct } from "../../Actions/actionsCreators";

function Ventas() {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.productForSell);
  const [flag, setFlag] = useState(false)

  const [formForSell, setFormForSell] = useState({
    producto_id: "",
    producto_stock: ""
  })

  const handleForm = (e) => {
    setFormForSell({
      ...formForSell,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchData(formForSell.producto_id))
    setFlag(true);
  }

  useEffect(() => {
    if (flag && dataList[0].producto_stock) {
      if (window.confirm("Desea hacer la compra del producto?")) {
        let variablecontrol = ({
          producto_id: dataList[0].producto_id,
          producto_name: dataList[0].producto_name,
          producto_referencia: dataList[0].producto_referencia,
          producto_precio: dataList[0].producto_precio,
          producto_peso: dataList[0].producto_peso,
          producto_categoria: dataList[0].producto_categoria,
          producto_stock: ''
        });
        if (parseInt(formForSell.producto_stock) < parseInt(dataList[0].producto_stock)) {
          variablecontrol = ({
            ...variablecontrol,
            producto_stock:  `${parseInt(dataList[0].producto_stock) - parseInt(formForSell.producto_stock)}`
          });
          dispatch(updateProduct(variablecontrol));
          setFlag(false);
          alert('Se realizo operación');
        } else if (parseInt(formForSell.producto_stock) === parseInt(dataList[0].producto_stock)) {
          variablecontrol = ({
            ...variablecontrol,
            producto_stock:  `${parseInt(dataList[0].producto_stock) - parseInt(formForSell.producto_stock)}`
          });
          dispatch(updateProduct(variablecontrol));
          setFlag(false);
          alert('Quedaron 0 productos en stock');
        } else if (parseInt(formForSell.producto_stock) > parseInt(dataList[0].producto_stock)) {
          alert('Existen menos cantidad deproductos en stock que los que se desea vender');
        }
      } else {
        window.location.reload()
      };
      window.location.reload()
    }
  }, [dataList[0]])

  return (
    <div>
      <p><b>Venta</b></p>
      <form onChange={(e) => handleForm(e)}>
        <div>

          <div className="producto">
            <label htmlFor="id">ID</label>
            <input placeholder='id...' type="text" name="producto_id" id="name" className="form-control" />
          </div>

          <div className="precio">
            <label htmlFor="name">Cantidad</label>
            <input placeholder='Cantidad...' type="number" name="producto_stock" id="name" className="form-control" />
          </div>

          <div className="submit">
            <button type='submit' onClick={(e) => handleSubmit(e)}>Aceptar</button>

          </div>

          <br />

        </div>
      </form>
    </div>
  )
}

export default Ventas