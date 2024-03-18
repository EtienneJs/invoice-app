import { createContext, useContext, useEffect, useState } from "react";
import { invoice } from "../data/invoice";

export const InvoiceContext = createContext();

const InvoiceProvider = ({children})=>{
    const [ items, setItems ] = useState(invoice.items)
    const [total, setTotal] = useState(items.map(_ => _.price * _.quantity).reduce((acc,current)=> acc + current,0));
    const [index, setIndex] = useState(-1);
    const handleItems = ({priceValue,productValue, quantityValue}) =>{
        const existIndex = items.findIndex((_) => _.product ==  productValue)
        const exist= items.filter((_) => _.product ==  productValue)
        if(existIndex != -1){
            const { quantity, price } = exist[0];
            items[existIndex] = { product:productValue,price:parseInt(priceValue,10) + price, quantity:parseInt(quantityValue,10) + quantity}
            setItems([...items])
        } else {
            setItems([...items,{ product:productValue,price:parseInt(priceValue,10), quantity:parseInt(quantityValue,10)}])
        }
        
    }
    
    const handleDeleteItems = (indexItem) =>{
        const existIndex = items.filter((_,index) => index !=  indexItem)
        setItems([...existIndex]);
    }
    const modifyItem = (indexItem,{priceValue,productValue, quantityValue}) =>{
        items[indexItem] = { product:productValue,price:parseInt(priceValue,10), quantity:parseInt(quantityValue,10)};
        setItems([...items]);
    }
    useEffect(()=>{
        setTotal(items.map(item => item.price * item.quantity).reduce((acc,current)=> acc + current,0))
    },[items])
    return (
        <InvoiceContext.Provider value={{total,
            index,
            setIndex,
            setItems,
            items,
            setItems,
            handleItems,
            handleDeleteItems,
            modifyItem}}>
            {children}
        </InvoiceContext.Provider>
    )
}

export default InvoiceProvider;
export const useInvoiceContext = ()=> useContext(InvoiceContext);