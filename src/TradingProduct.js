import react from "react"
import { Link } from "react-router-dom"


export default function TradingProduct() {
    return (
        <>
            <nav className="nav1">
                <div className="logo">
                    <h4>Trading</h4>
                </div>
                <ul className="nav-links1">
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Contact</Link></li>
                    <li><Link href="#">About</Link></li>
                </ul>
                <div className="currencies">
                    <select>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="JPY">JPY</option>
                        <option value="INR">INR</option>
                    </select>
                </div>
            </nav>


            <div className="container1">
                <h1>Welcome to our trading website</h1>
                <div className="cards1">
                    <div className="card1">
                        <h2>Stocks</h2>
                        <p>Buy and sell stocks from around the world</p>
                        <button className="buynow">Buy Now</button>
                    </div>
                    <div className="card1">
                        <h2>Crypto</h2>
                        <p>Trade cryptocurrencies with ease</p>
                        <button className="buynow">Buy Now</button>
                    </div>
                    <div className="card1">
                        <h2>Forex</h2>
                        <p>Exchange currencies and make profits</p>
                        <button className="buynow">Buy Now</button>
                    </div>
                </div>
            </div>


            <footer>
                {/* <div className="logos">
                    <div className="logo">
                        <img src="akbar-logo.png" alt="Akbar Logo" />
                    </div>
                    <div className="logo">
                        <img src="huzaifa-logo.png" alt="Huzaifa Logo" />
                    </div>
                    <div className="logo">
                        <img src="shanur-logo.png" alt="Shanur Logo" />
                    </div>
                </div> */}
                <button className="buynow">Buy Now</button>
                <p>&copy; 2023 Trading. All rights reserved.</p>
            </footer>
        </>
    )
}