import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Auth.css"

const SESSION_KEY = "auth_session"
const SESSION_DURATION = 30 * 24 * 60 * 60 * 1000

const hashEmail = (email) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(email + "sales_dashboard_salt")
  let hash = 0
  for (let i = 0; i < data.length; i++) {
    const char = data[i]
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return hash.toString(16)
}

const maskEmail = (email) => {
  const [local, domain] = email.split("@")
  const maskedLocal = local.slice(0, 2) + "***"
  return maskedLocal + "@" + domain
}

function Auth() {
  const navigate = useNavigate()
  const [authMode, setAuthMode] = useState("signin")

  const [signInData, setSignInData] = useState({ email: "", password: "" })
  const [signUpData, setSignUpData] = useState({ name: "", email: "", password: "", confirmPassword: "" })
  const [resetData, setResetData] = useState({ email: "" })

  useEffect(() => {
    const storedSession = localStorage.getItem(SESSION_KEY)
    if (storedSession) {
      const session = JSON.parse(storedSession)
      if (Date.now() < session.expiresAt) {
        navigate("/")
      }
    }
  }, [navigate])

  const handleSignIn = (e) => {
    e.preventDefault()
    const session = {
      user: { 
        emailHash: hashEmail(signInData.email), 
        displayEmail: maskEmail(signInData.email),
        name: signInData.email.split("@")[0] 
      },
      expiresAt: Date.now() + SESSION_DURATION,
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    navigate("/")
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    const session = {
      user: { 
        emailHash: hashEmail(signUpData.email), 
        displayEmail: maskEmail(signUpData.email),
        name: signUpData.name 
      },
      expiresAt: Date.now() + SESSION_DURATION,
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    navigate("/")
  }

  const handleReset = (e) => {
    e.preventDefault()
    console.log("Reset Password:", resetData)
    setAuthMode("signin")
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-title">
            {authMode === "signin" && "Welcome Back"}
            {authMode === "signup" && "Create Account"}
            {authMode === "reset" && "Reset Password"}
          </h1>
          <p className="auth-subtitle">
            {authMode === "signin" && "Enter your credentials to access your account"}
            {authMode === "signup" && "Fill in your details to get started"}
            {authMode === "reset" && "We'll send you a link to reset your password"}
          </p>
        </div>

        {authMode === "signin" && (
          <form className="auth-form" onSubmit={handleSignIn}>
            <div className="form-group">
              <label htmlFor="signin-email">Email</label>
              <input
                type="email"
                id="signin-email"
                value={signInData.email}
                onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signin-password">Password</label>
              <input
                type="password"
                id="signin-password"
                value={signInData.password}
                onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="auth-button">Sign In</button>
            <div className="auth-links">
              <button type="button" className="link-button" onClick={() => setAuthMode("reset")}>
                Forgot Password?
              </button>
              <button type="button" className="link-button" onClick={() => setAuthMode("signup")}>
                Don't have an account? Sign Up
              </button>
            </div>
          </form>
        )}

        {authMode === "signup" && (
          <form className="auth-form" onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="signup-name">Full Name</label>
              <input
                type="text"
                id="signup-name"
                value={signUpData.name}
                onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-email">Email</label>
              <input
                type="email"
                id="signup-email"
                value={signUpData.email}
                onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                id="signup-password"
                value={signUpData.password}
                onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                placeholder="Create a password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-confirm">Confirm Password</label>
              <input
                type="password"
                id="signup-confirm"
                value={signUpData.confirmPassword}
                onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })}
                placeholder="Confirm your password"
                required
              />
            </div>
            <button type="submit" className="auth-button">Create Account</button>
            <div className="auth-links">
              <button type="button" className="link-button" onClick={() => setAuthMode("signin")}>
                Already have an account? Sign In
              </button>
            </div>
          </form>
        )}

        {authMode === "reset" && (
          <form className="auth-form" onSubmit={handleReset}>
            <div className="form-group">
              <label htmlFor="reset-email">Email</label>
              <input
                type="email"
                id="reset-email"
                value={resetData.email}
                onChange={(e) => setResetData({ email: e.target.value })}
                placeholder="you@example.com"
                required
              />
            </div>
            <button type="submit" className="auth-button">Send Reset Link</button>
            <div className="auth-links">
              <button type="button" className="link-button" onClick={() => setAuthMode("signin")}>
                Remember your password? Sign In
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default Auth
