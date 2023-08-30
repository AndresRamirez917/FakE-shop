import React ,{ createContext } from "react";
import { useState, useEffect } from "react";

export const Contexto = createContext();

export const Datos = ({children}) =>{
    const [products, setProducts] = useState([]);
    const [productsPerPage, setProductsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [cartProduct, setCartProduct] = useState([]);
    const [cantidad, setCantidad] = useState(1);

    const ProductList = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        const products = await data.json();
        setProducts(products);
      };

      useEffect(() => {
        ProductList();
      },[]);

      const anadirCarrito = product =>{
        if (cartProduct.find(item => item.id === product.id)){
          const products = cartProduct.map(item => item.id === product.id ?{...item, quantity: item.quantity +1} : item
            )
            return setCartProduct(products)
        }
      
        setCartProduct([...cartProduct, product]);
        console.log(product)
        }

        return(
            <Contexto.Provider value={{products, setProducts, productsPerPage, setProductsPerPage, currentPage, setCurrentPage, cartProduct, setCartProduct, cantidad, setCantidad, ProductList, anadirCarrito}}>
                {children}
            </Contexto.Provider>
        )
    
}