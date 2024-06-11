import { useState } from 'react'
import './App.css'
import {Outlet} from 'react-router-dom'
import { Header , Footer } from './component'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Header></Header>
  <Outlet></Outlet>
  <Footer></Footer>
  </>
  )
}

export default App
