function Orders() {
  const orders = [
    { id: "ORD-001", customer: "John Doe", total: 1499.99, status: "Completed" },
    { id: "ORD-002", customer: "Jane Smith", total: 89.99, status: "Pending" },
    { id: "ORD-003", customer: "Bob Wilson", total: 429.98, status: "Processing" },
    { id: "ORD-004", customer: "Alice Brown", total: 1299.00, status: "Completed" },
    { id: "ORD-005", customer: "Charlie Davis", total: 49.99, status: "Cancelled" },
  ]

  const getStatusPill = (status) => {
    const pillClass = {
      Completed: "pill-green",
      Pending: "pill-blue",
      Processing: "pill-blue",
      Cancelled: "pill-red",
    }[status]

    return <span className={`pill ${pillClass}`}>{status}</span>
  }

  return (
    <div className="orders-page">
      <h1>Orders</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>${order.total}</td>
              <td>{getStatusPill(order.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Orders
