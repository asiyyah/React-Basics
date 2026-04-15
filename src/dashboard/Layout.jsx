import { Link, Outlet, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function Layout() {
  const navigate = useNavigate()
  const SESSION_KEY = "auth_session"
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedSession = localStorage.getItem(SESSION_KEY)
    if (storedSession) {
      const session = JSON.parse(storedSession)
      if (Date.now() < session.expiresAt) {
        setUser(session.user)
      } else {
        localStorage.removeItem(SESSION_KEY)
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
    navigate("/auth")
  }

  const navItems = [
    { path: "/", label: "Dashboard" },
    { path: "/products", label: "Products" },
    { path: "/orders", label: "Orders" },
    { path: "/analytics", label: "Analytics" },
  ]

  return (
    <div className="dashboard-layout">
      <nav className="dashboard-nav">
        <h2>Sales Dashboard</h2>
        {user && (
          <div style={{ marginBottom: "20px" }}>
            <p style={{ marginBottom: "2px", color: "#6b7280", fontSize: "0.9rem" }}>Signed in as</p>
            <p style={{ margin: 0, color: "#374151", fontSize: "0.85rem" }}>{user.displayEmail}</p>
          </div>
        )}
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
        {user && (
          <button
            onClick={handleLogout}
            style={{ marginTop: "auto", width: "100%", marginTop: "20px" }}
          >
            Sign Out
          </button>
        )}
      </nav>
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
