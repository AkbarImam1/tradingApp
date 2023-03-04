import reacrt from "react"


export default function SellerRegister() {
    return (
        <>
        <div className="row justify-content-center">
            <div className="container sellerRegister h-50 m-auto">
                <div className="col-8 mx-5">
                    .<div className="row justify-content-around">
                        <div className="form-wrapper">
                            <div className="banner">
                                <h1>Greetings! </h1>
                                <p>Welcome to Sign Up page, from here you can start your journey</p>
                            </div>
                            <div className="green-bg">
                                <button type="button">Sign Up</button>
                            </div>
                            <form className="signup-form">
                                <h1>Create Account</h1>
                                <div className="social-media">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <p>or use your email for registration</p>
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
                                    <input type="text" placeholder="GST number" />
                                </div>

                                <div className="input-group">
                                    <i className="fas fa-lock"></i>
                                    <input type="text" placeholder="Adhaar" />
                                </div>

                                <div className="input-group">
                                    <i className="fas fa-lock"></i>
                                    <input type="text" placeholder="city" />
                                </div>


                                <button type="button">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}