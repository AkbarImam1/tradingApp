import react from "react"
import Navbar from "./navbar"
import BottomNavBar from "./BottomNavBar"
import ApparelsHeading from "./ApparelsHeding"
import Card from "./Card"

const Beauty = [

    {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
        "rate": 3.9,
        "count": 70
        }
        },

        {
            "id": 7,
            "title": "White Gold Plated Princess",
            "price": 9.99,
            "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
            "rating": {
            "rate": 3,
            "count": 400
            }
            },

            {
                "id": 8,
                "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
                "price": 10.99,
                "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
                "category": "jewelery",
                "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
                "rating": {
                "rate": 1.9,
                "count": 100
                }
                },

                {
                    "id": 5,
                    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                    "price": 695,
                    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
                    "category": "jewelery",
                    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                    "rating": {
                    "rate": 4.6,
                    "count": 400
                    }
                    }
]

export default function Beuty(){
    const heading = "women's beauty"
    return(
        <>
            <Navbar />
            <BottomNavBar />
            <ApparelsHeading data={heading} />
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="container  m-1 p-5 d-inline">
                        <div className="row justify-content-evenly">
                            {
                                Beauty.map((item, key) => {
                                    return <Card key={key} itemData={item} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}