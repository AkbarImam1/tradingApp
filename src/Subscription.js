import BottomNavBar from "./BottomNavBar";
import Footer from "./Footer";
import Navbar from "./navbar";

export default function Subscription() {
    return (
        <>
         <Navbar/>
         <BottomNavBar/>
            <div className="membership-card silver">
                <h2>Silver Membership</h2>
                <p>Get access to exclusive content and discounts.</p>
                <button className="btn">Add to cart</button>
            </div>

            <div className="membership-card gold">
                <h2>Gold Membership</h2>
                <p>Get access to even more exclusive content and discounts.</p>
                <button className="btn">Add to cart</button>
            </div>

            <div className="membership-card platinum">
                <h2>Platinum Membership</h2>
                <p>Get access to our most exclusive content and discounts.</p>
                <button className="btn">Add to cart</button>
            </div>

            <div className="membership-card platinum-plus">
                <h2>Platinum+ Membership</h2>
                <p>Get access to everything we offer, plus personal coaching and support.</p>
                <button className="btn">Add to cart</button>
            </div>
            <Footer/>
        </>
    )
}