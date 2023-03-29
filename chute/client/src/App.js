// import './App.css'
// import material from './material'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {
  return (
    <NavLink>
      <div>
        <header>
          <a href="/">chute</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </main>
      </div>
    </NavLink>
  )
}

export default App
