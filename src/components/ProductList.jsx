import React, { useState, useEffect, useContext } from "react";
import Pagination from "./Pagination";
import Cart from "./Cart";
import { Datos } from "../contexto/Contexto";
import { Contexto } from "../contexto/Contexto";

const ProductList = ({id, price, title, image}) => {
  const {products} = useContext(Contexto);
  const {productsPerPage} = useContext(Contexto)
  const {currentPage} = useContext(Contexto)
  //const {cartProduct} = useContext(Contexto)
  const {cartProduct, setCartProduct} = useContext(Contexto)
  const {ProductList} = useContext(Contexto)
  const {quantity} = useContext(Contexto)
  const {total, setTotal} = useContext(Contexto)

  const totalProducts = products.length;
  const lastIndex = currentPage * productsPerPage; // 1 * 6 = 6 página 2 2 *6 = 12
  const firstIndex = lastIndex - productsPerPage;  // 6 - 6 = 0  página 2 12 - 6 = 6


  const anadirCarrito = (product) =>{
  //  if(cartProduct.length>0){
  //   console.log("no vacío")
  //  }
  //  setCartProduct((currItems) => {
  //   const isItemsFound = currItems.find((item) => item.id === id);
  //   if (isItemsFound) {
  //     return currItems.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, quantity: item.quantity + 1 };
  //       } else {
  //         return item;
  //       }
  //     });
  //   } else {
  //     return [...currItems, { id, quantity: 1, price }];
  //   }
  // });
  // console.log(cartProduct)

  //setTotal(total + product.price * product.quantity);
if(cartProduct.find((item) => item.id === product.id)){
      const productos = cartProduct.map((item) => item.id === product.id 
      ? {...item, quantity: item.quantity + 1}
      : item 
        );
        //setTotal(total + product.price * product.quantity);
        console.log()
        return setCartProduct([...productos])
    }else{
      setCartProduct([...cartProduct, {id: product.id, price: product.price, quantity: 1, image: product.image}])
    }
    
    //console.log(product)
    console.log(cartProduct)
    console.log(product.price)
    }

    


  useEffect(() => {
    ProductList();
  },[]);


  //ProductList();
  return (
    <>
      <div className="container-products" >
        {products.map((product) => (
          <div className="card-product" key={product.id}>
            <figure className="container-img">
              <img src={product.image} alt={product.title} />
            </figure>
            <div className="info-product">
              <h3>{product.title}</h3>
              <p className="price">{product.price}</p>
              <button onClick={()=>anadirCarrito(product)}>Añadir al carrito</button>
            </div>
          </div>
        )).slice(firstIndex, lastIndex)}
      </div>
    </>
  );
};

export default ProductList;
