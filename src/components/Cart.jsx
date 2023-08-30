import React, { useContext, useRef, useEffect } from 'react'
import { Contexto } from '../contexto/Contexto'
//import paisaje from "src/logo.svg"
//import marta from "../images/marta.PNG"

const Cart = () => {
    // const [contador, setContador] = useState(1)
    const refCaja = useRef()

const add = product =>{
   if(cartProduct.find(item=> item.id===product.id)){
    const productos = cartProduct.map(item => item.id === product.id?{...item, quanti: item.quanti+1}:item
        )
        return setCartProduct([...productos])
   } 
setCartProduct([...cartProduct, product])
console.log(cartProduct)   
}

const minus = () => {
    setCantidad(cantidad-1)
} 

const del = (product) =>{
    const result = cartProduct.filter(item => item.id!== product.id)
    setCartProduct(result)
}

const total = (num1) =>{
    let quantity =  Number(document.getElementById("#quantity").innerHTML)
    let result = num1*quantity
    return result
}

const {products} = useContext(Contexto);
//const {setProducts} = useContext(Contexto)
//const {productsPerPage} = useContext(Contexto)
//const {setProductsPerPage} = useContext(Contexto)
//const {currentPage} = useContext(Contexto)
//const {setCurrentPage} = useContext(Contexto)
const {cartProduct} = useContext(Contexto)
const {setCartProduct} = useContext(Contexto)
const {cantidad} = useContext(Contexto)
const {setCantidad} = useContext(Contexto)

// useEffect(() => {
//    cantidad
// },[cantidad])

  return (
    <>
    <div className='carrito'>
        <div className='productosCarrito'>
            {cartProduct.map(product=>{
                return (
                    <div className='productoCarrito' key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className='infoProducto'>
                         <h3 id='quantity'>Cantidad:{cantidad}</h3>
                            <h3>{product.name}</h3>
                            <p>Precio: {Math.floor(product.price*cantidad).toFixed(2)}</p>
                            <div>
            <button onClick={()=>add(product)} >+</button>
            <button onClick={minus}>-</button> 
            <button onClick={()=>del(product)}>x</button> 
        </div> 
                        </div>          
                    </div>
                )
            })}
    </div>  
    { <div><p className='total'>TOTAL:{}</p></div>}
    </div>
 
    </>
  )
}

export default Cart