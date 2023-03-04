import react from "react"
import { Link } from 'react-router-dom'

function BottomNavBar() {
    const url = "C:/Users/akbar imam/OneDrive/Desktop/e_commerce/my-app/images/logo.png";
    return (
        <>
            <div className="contaiber-fluid">
                <div className="container border-bottom">
                    <div className="row d-flex justify-content-around">
                        <div className="col-3"><img src="../src/images/logo.png" height={80} width={80} alt="" /></div>
                        {/* <div className="col-2"></div> */}
                        <div className="col-4 m-2 p-1">
                            <div className="container-fluid">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                </form>
                            </div>
                        </div>
                        {/* <div className="col-1">search button</div> */}
                    </div>
                    <div className="row d-flex justify-content-around">
                        <div className="col-8">
                            <div className="row justify-content-start">
                                <div className="col-2">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" bottomNavbar>
                                                Apparels
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="m-1 p-2"><Link to="/apparels">Men</Link></li>
                                                <li className="m-1 p-2"><Link to="/apparels">Women</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-2 p-2" bottomNavbar><Link to="/electronics">Electronics</Link></div>
                                <div className="col-2 ">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" bottomNavbar>
                                                Beauty
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="m-1 p-2"><Link to="/beauty">Men</Link></li>
                                                <li className="m-1 p-2"><Link to="/beauty">Women</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-2 p-2" bottomNavbar>Groceries</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row justify-content-end">
                                <div className="col-3 p-2" bottomNavbar><Link to='/trading'>Trading</Link></div>
                                <div className="col-3 p-2" bottomNavbar><Link to='/subscription'>Subscription</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container"></div>
            </div>
        </>
    )
}

export default BottomNavBar;