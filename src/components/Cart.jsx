import React, { useContext, useRef, useEffect } from 'react'
import { Contexto } from '../contexto/Contexto'
//import paisaje from "src/logo.svg"
//import marta from "../images/marta.PNG"
let variable = 1
//let quantity;
const Cart = ({id, price, title, image}) => {
    // const [contador, setContador] = useState(1)
    const refCaja = useRef()

const addOne = (product) =>{
    if (cartProduct.find(item => item.id === id)) {
        const products = cartProduct.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity =variable+=1 }
                : item
        );
    
        return setCartProduct([...products]);
    }

 
    setCartProduct([...cartProduct, product]);
    
//product.quantity=variable+=1
//console.log(cartProduct)

 
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
    // setCantidad(cantidad-1)
    // cantidad<0?setCantidad(0):setCantidad(cantidad)
    if(cartProduct.find(item=> item.id===product.id)){
        const productos = cartProduct.map(item => item.id === product.id
             ?{...item, quantity: item.quantity=--variable}
             :item
          
            
            )
            variable<1?variable=1
            :variable-1
            console.log(product)
            return setCartProduct([...productos])
       }
    setCartProduct([...cartProduct, product])
    setVariable([100])
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
//const {variable} = useContext(Contexto)
//const {setVariable} = useContext(Contexto)

// useEffect(() => {
//    cantidad
// },[cantidad])

  return (
    <>
    <div className='carrito' >
        <div className='productosCarrito'>
            {cartProduct.map((product)=>(
                    <div className='productoCarrito' key={id} >
                        <img src={image} alt={title} />
                        <div className='infoProducto'>
                         <h3 id='quantity'>Cantidad:{variable}</h3>
                            <h3>{title}</h3>
                            <p>Precio: {Math.floor(price*variable).toFixed(2)}</p>
                            <div>
            <button onClick={()=>addOne(product)} >+</button>
            <button onClick={()=>minus(product)}>-</button> 
            <button onClick={()=>del(product)}>x</button> 
        </div> 
                        </div>          
                    </div>
                
            ))}
    </div>  
    { <div><p className='total'>TOTAL:{}</p></div>}
    </div>
 
    </>
  )
}

export default Cart