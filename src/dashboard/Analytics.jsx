function Analytics() {
  const monthlyData = [
    { month: "Jan", sales: 12000 },
    { month: "Feb", sales: 15000 },
    { month: "Mar", sales: 13500 },
    { month: "Apr", sales: 18000 },
    { month: "May", sales: 22000 },
    { month: "Jun", sales: 25000 },
  ]

  const totalSales = monthlyData.reduce((sum, item) => sum + item.sales, 0)

  return (
    <div className="analytics-page">
      <h1>Analytics</h1>
      <div className="analytics-summary">
        <div className="summary-card">
          <h3>Total Sales (6 months)</h3>
          <p className="summary-value">${totalSales.toLocaleString()}</p>
        </div>
        <div className="summary-card">
          <h3>Monthly Average</h3>
          <p className="summary-value">${Math.round(totalSales / 6).toLocaleString()}</p>
        </div>
      </div>
      <div className="chart-placeholder">
        <h3>Monthly Sales</h3>
        <div className="chart-bars">
          {monthlyData.map((item) => (
            <div key={item.month} className="bar-container">
              <div
                className="bar"
                style={{ height: `${(item.sales / 25000) * 100}%` }}
              >
                <span className="bar-value">${(item.sales / 1000).toFixed(0)}k</span>
              </div>
              <span className="bar-label">{item.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Analytics
