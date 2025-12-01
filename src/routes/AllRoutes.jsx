import React from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import ProductList from '../pages/Products/ProductList';
import ProductDetails from '../pages/ProductDetails';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import CartPage from '../pages/Cart/CartPage';
import OrderPage from '../pages/Order/OrderPage';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import PageNotFound from '../pages/PageNotFound';
import ProctedRoute from './ProctedRoute';

export default function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/products' element={<ProductList/>}/>
            <Route path='/products/:id' element={<ProductDetails/>}/>
            <Route path='/Login' element={<LogIn/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/cart' element={<ProctedRoute><CartPage/></ProctedRoute>}/>
            <Route path='/ordersummary' element={<ProctedRoute><OrderPage/></ProctedRoute>}/>
            <Route path='/dashboard' element={<ProctedRoute><DashboardPage/></ProctedRoute>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </>
  )
}
