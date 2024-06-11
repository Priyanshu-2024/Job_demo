import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home, Details, Search, Listing, } from './component'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='list' element={<Listing />}/>
      <Route path='details' element={<Details />} />
      <Route path='search' element={<Search />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
 
)
