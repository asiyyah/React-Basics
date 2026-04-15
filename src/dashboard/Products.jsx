function Products() {
  const products = [
    { id: 1, name: "Laptop Pro 15", price: 1299, stock: 45 },
    { id: 2, name: "Wireless Mouse", price: 29.99, stock: 120 },
    { id: 3, name: "USB-C Hub", price: 49.99, stock: 67 },
    { id: 4, name: "Monitor 27\"", price: 399, stock: 23 },
    { id: 5, name: "Keyboard Mechanical", price: 89.99, stock: 54 },
  ]

  return (
    <div className="products-page">
      <h1>Products</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products
