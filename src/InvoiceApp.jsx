import React, { useState } from "react";
import { getInvoice } from "./services/getInvoice";
import { InvoiceView } from "./component/InvoiceView";
import { ClientView } from "./component/ClientView";
import { CompanyView } from "./component/CompanyView";
import { ProductView } from "./component/ProductView";
import { TotalView } from "./component/TotalView";

export const InvoiceApp = () => {
  const { id, name, client, company, items:itemsInitials,total } = getInvoice();
  const [productValue,setProductValue] = useState('');
  const [priceValue,setPiceValue] = useState(0);
  const [quantityValue,setQuantityValue] = useState(0);

  const [items, setItems] = useState(itemsInitials);

  return (
    <div className="container">
      <div className="card my-3">
        <div className="card-header">Ejemplo Factura</div>
        <div className="card-body">
         <InvoiceView name={name} id={id}/>
          <div className="row my-3">
            <div className="col">
                <ClientView client={client} title="Datos del Cliente"/>
            </div>
            <div className="col">
             <CompanyView company={company} title="Datos de la Empresa"/>
            </div>
          </div>
          <ProductView items={items} title="Productos de la factura" />
          <TotalView total={total}/>
          <form className="w-50" onSubmit={(e)=> {
            e.preventDefault();
            setItems([...items, {price: priceValue,product:parseInt(productValue,10),quantity:parseInt(quantityValue,10)}])
          }}>
            <input type="text"  name="product" placeholder="Producto" className="form-control m-3" onChange={e=> setProductValue(e.target.value)}/>
            <input type="text"  name="price" placeholder="Precio" className="form-control m-3" onChange={e=> setPiceValue(e.target.value)}/>
            <input type="text"  name="quantity" placeholder="Cantidad" className="form-control m-3" onChange={e=> setQuantityValue(e.target.value)}/>
            <button type="submit" className="btn btn-primary m-3">Crear Item</button>
          </form>
        </div>
      </div>
    </div>
  );
};
