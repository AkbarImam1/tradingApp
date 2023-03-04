import react from "react"

export default function UserLogin(){
    return (
        <>
        <div className="container">
      <div className="form-wrapper">
        <div className="banner">
          <h1>Greetings! </h1>
          <p>Welcome to Sign In page, from here you can start your journey</p>
        </div>
        <div className="green-bg">
          <button type="button">Sign In</button>
        </div>
        <form className="signup-form">
          <h1>Login your Account</h1>
          <div className="social-media">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
          {/* <p>or use your email for registration</p> */}
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Phone number" />
          </div>
          <button type="button">Sign In</button>
        </form>
      </div>
    </div>
        </>
    )
}