import React, { useContext, useRef, useEffect, useState } from 'react'
import { Contexto } from '../contexto/Contexto'
const Cart = ({id, price, title, image, quantity}) => {
    const refCaja = useRef()
    const {total, setTotal} = useContext(Contexto)

const addOne = (product) =>{
    console.log(product.price)
    setTotal( total + product.price )
    //setTotal(total + product.price * product.quantity);
    if (cartProduct.find(item => item.id === product.id)) {
        const productos = cartProduct.map(item => item.id === product.id
                ? { ...item, quantity: item.quantity +1 }
                : item
        );
   
        return setCartProduct([...productos]);
    }
    setCartProduct([...cartProduct, product]);
}


// const anadirCarrito = product =>{
//     if (cartProduct.find(item => item.id === product.id)){    
//       const products = cartProduct.map(item => item.id === product.id
//         ?{...item, quantity: item.setQuantity(item.quantity = 1)}
//         :item 
//         )
//         return setCartProduct(products)
//     }
//     setCartProduct([...cartProduct, product]);
//     console.log(product)
//     }

const minus = (product) => {
    //cantidad<0?setCantidad(0):setCantidad(cantidad)
    setTotal(total - product.price )
    if(cartProduct.find(item=> item.id===product.id)){
        const productos = cartProduct.map(item => item.id === product.id && item.quantity > 1 
             ?{...item, quantity: item.quantity-1}
             :item)
            return setCartProduct([...productos])
       }
    setCartProduct([...cartProduct, product])
} 

const del = (product) =>{
    console.log(cartProduct)
    setTotal(total - product.price )
    if(cartProduct.length!==0){
        const result = cartProduct.filter(item => item.id!== product.id)
        setCartProduct(result)
    }else if(cartProduct.length==1){
        console.log(cartProduct)
setCartProduct([])
        setTotal(total===0?0:total-product.price)
    }console.log(cartProduct.length)
}

const totaCarrito = () =>{
    const totalPrice = cartProduct.reduce((acc, curr)=>
    Math.round(acc + curr.product.price * curr.quantity)
 ,0)
}

const {products} = useContext(Contexto);
const {cartProduct} = useContext(Contexto)
const {setCartProduct} = useContext(Contexto)
const {cantidad} = useContext(Contexto)
const {setCantidad} = useContext(Contexto)

  return (
    <>
    <div className='carrito' >
        <div className='productosCarrito'>
            {cartProduct.map((product)=>(
                    <div className='productoCarrito' key={product.id} >
                        <img src={product.image} alt={product.title} />
                        <div className='infoProducto'>
                         <h3 id='quantity'>Cantidad:{product.quantity}</h3>
                         <h3 id='quantity'>Precio Unidad:{product.price}</h3>
                            <p>Precio: {Math.floor(product.price*product.quantity).toFixed(2)}</p>
                            <div>
            <button onClick={()=>addOne(product)} >+</button>
            <button onClick={()=>minus(product)}>-</button> 
            <button onClick={()=>del(product)}>x</button> 
        </div> 
                        </div>          
                    </div>
            ))}
    </div>  
    { <div><p className='total'>TOTAL:{Math.floor(total).toFixed(2)}</p></div>}
    </div>
    { <div><p className='total'>TOTAL:{Math.floor(total).toFixed(2)}</p></div>}
    </>
  )
}

export default Cart