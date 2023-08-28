import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ProductList from './components/ProductList'
function App() {

  return (
    <>
    <div className="App">
      <h1 className='title'>FakE-shop</h1>
      <ProductList/>
    </div>
    </>
  )
}

export default App
