// import './App.css'
import material from './material'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

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
          </Routes>
          <h1>Featured Products</h1>
          <div classname="items">
            {material.products.map((product) => (
              <div className="item" key={product.id}>
                <a href={`/material/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="item-details">
                  <a href={`/product/${product.id}`}>
                    <p>{product.name}</p>
                  </a>
                  <p>{product.price}</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </NavLink>
  )
}

export default App
