import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const ProductList = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const products = await data.json();
    setProducts(products);
  };

  const totalProducts = products.length;

  const lastIndex = currentPage * productsPerPage; // 1 * 6 = 6 página 2 2 *6 = 12
  const firstIndex = lastIndex - productsPerPage; // 6 - 6 = 0  página 2 12 - 6 = 6

  useEffect(() => {
    ProductList();
  }, []);

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
              <button>Añadir al carrito</button>
            </div>
          </div>
        )).slice(firstIndex, lastIndex)}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
      />
    </>
  );
};

export default ProductList;
