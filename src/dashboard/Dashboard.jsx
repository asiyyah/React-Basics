function Dashboard() {
  const stats = [
    { label: "Total Revenue", value: "$125,430", change: "+12.5%" },
    { label: "Orders", value: "1,234", change: "+8.2%" },
    { label: "Customers", value: "856", change: "+5.1%" },
    { label: "Avg. Order Value", value: "$101.65", change: "+3.4%" },
  ]

  return (
    <div className="dashboard-home">
      <h1>Dashboard Overview</h1>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span className="stat-label">{stat.label}</span>
            <span className="stat-value">{stat.value}</span>
            <span className={`stat-change ${stat.change.startsWith("-") ? "negative" : ""}`}>{stat.change}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
