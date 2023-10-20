import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ProductList from './components/ProductList'
import { Datos } from './contexto/Contexto'
import Pagination from './components/Pagination'
import Cart from './components/Cart'
import Categorias from './components/Categorias'
function App() {

  return (
    <>
    <div className="App">
      <h1 className='title'>FakE-shop</h1>
      <Datos>
        <Categorias/>
      <Cart /> 
      <ProductList/>
       <Pagination/> 
      </Datos>
    </div>
    </>
  )
}

export default App
