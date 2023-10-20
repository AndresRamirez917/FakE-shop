import React, { useContext } from 'react'
import { Contexto } from '../contexto/Contexto'

const Categorias = ({id, title, price, image}) => {
    const {products, setProducts} = useContext(Contexto)
    //console.log(products)

   
       const allCategory = [...new Set(products.map((item)=>item.category))]
 
  return (
    <>
    <button>Categorias </button>
    {allCategory.map((item)=>(
        <div key={item}>
            <a onClick={()=>{
                const filterData = products.filter((item)=>item.category === item)
                console.log(filterData)
            }}>{item}</a>
        </div>
        
    ))}
    </>
  )
}

export default Categorias