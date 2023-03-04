import react from "react"
import logo from "./images/logo.png"

export default function ApparelsHeading(props) {
    const heading = props.data;
    // const heading = "Men's"
    return (
        <>
            <div className="container m-5 align-items-center">
                <div className="row">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="col-3 border bg-primary p-2"><img src={logo} height={50} width={50} alt="" /></div>
                            <div className=" col-6 p-2 bg-info"><h3 className="text-bolder text-center">{heading} </h3></div>
                            <div className="col-3 p-2 bg-primary">
                                <img src={logo} height={50} width={50} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}