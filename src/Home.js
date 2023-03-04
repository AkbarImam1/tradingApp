import react, { useState, useEffect } from "react";
import NavBar from "./navbar";
import BottomNavBar from "./BottomNavBar";
import Card from "./Card";
function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json));

        // console.log(data);
    }, [])

    // const arr = [1,2,3,4,5,6,7,8,9,10];
    return (
        <>
            <NavBar />
            <BottomNavBar />
            
             <div className="row justify-content-center">
             <div className="col-8">
             <div className="container  m-1 p-5 d-inline">
                <div className="row justify-content-evenly">
                {
                    data.map((item, key) => {
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


export default Home;