import React, { useState } from "react";
import { getInvoice } from "./services/getInvoice";
import { InvoiceView } from "./component/InvoiceView";
import { ClientView } from "./component/ClientView";
import { CompanyView } from "./component/CompanyView";
import { ProductView } from "./component/ProductView";
import { TotalView } from "./component/TotalView";
import { useInvoiceContext } from "./context/InvoiceContext";

export const InvoiceApp = () => {
  const initialFormData = {
    productValue:'',priceValue:'', quantityValue:''
  };
  const { id, name, client, company } = getInvoice();
  const [formData, setFormData] = useState(initialFormData);
  const {items,handleItems, total,modifyItem,index,setIndex} = useInvoiceContext();
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(index != -1){
      modifyItem(index,formData);
      setIndex(-1);
    } else {
      handleItems(formData);
    }
    setFormData(initialFormData)
  }

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
          <ProductView items={items} title="Productos de la factura" setFormData={setFormData}/>
          <TotalView total={total}/>
          <form className="w-50" onSubmit={(e)=> handleSubmit(e)}>
            {
              (index != -1) && (
                <input type="text"  name="index" placeholder="index" className="form-control m-3" value={index} readOnly/>    
              )
            }
            <input type="text" value={formData.productValue}  name="product" placeholder="Producto" className="form-control m-3" onChange={e=> setFormData({...formData,productValue:e.target.value})}/>
            <input type="text"  value={formData.priceValue} name="price" placeholder="Precio" className="form-control m-3" onChange={e=> setFormData({...formData,priceValue:e.target.value})}/>
            <input type="text"  value={formData.quantityValue} name="quantity" placeholder="Cantidad" className="form-control m-3" onChange={e=> setFormData({...formData,quantityValue:e.target.value})}/>
            <button type="submit" className="btn btn-primary m-3">{index == -1 ? 'Crear Item' : 'Modificar'}</button>
          </form>
        </div>
      </div>
    </div>
  );
};
