import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
import { Signup } from './Components/Signup'
import { NotFound } from './Components/NotFound'
import { AddProducts } from './Components/AddProducts'
import { Cart } from './Components/Cart'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component = {<Home/>}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/add-products" component={AddProducts}/>
        <Route path="/cart" component={Cart}/>       
        <Route component={NotFound}/>        
      </Routes>
    </BrowserRouter>
  )
}

export default App
