import React, { useState, useEffect, useContext } from "react";
import Pagination from "./Pagination";
import Cart from "./Cart";
import { Datos } from "../contexto/Contexto";
import { Contexto } from "../contexto/Contexto";

const ProductList = () => {
  //const [products, setProducts] = useState([]);
  //const [productsPerPage, setProductsPerPage] = useState(6);
  //const [currentPage, setCurrentPage] = useState(1);
  //const [cartProduct, setCartProduct] = useState([]);
  const {products} = useContext(Contexto);
  const {productsPerPage} = useContext(Contexto)
  const {currentPage} = useContext(Contexto)
  const {cartProduct} = useContext(Contexto)
  const {setCartProduct} = useContext(Contexto)
  const {ProductList} = useContext(Contexto)
  const {anadirCarrito} = useContext(Contexto)


  // const ProductList = async () => {
  //   const data = await fetch("https://fakestoreapi.com/products");
  //   const products = await data.json();
  //   setProducts(products);
  // };



  const totalProducts = products.length;

  const lastIndex = currentPage * productsPerPage; // 1 * 6 = 6 página 2 2 *6 = 12
  const firstIndex = lastIndex - productsPerPage;  // 6 - 6 = 0  página 2 12 - 6 = 6





  useEffect(() => {
    ProductList();
  },[]);


  ProductList();
  return (
    <>
      <div className="container-products">
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
