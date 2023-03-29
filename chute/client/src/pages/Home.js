function Home() {
  return
  ;<div>
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
  </div>
}

export default Home
