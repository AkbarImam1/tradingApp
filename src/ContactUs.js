import { ContactSupportSharp } from "@mui/icons-material"
import react from "react"



export default function ContactUS() {
    // const contactBtn = document.querySelector('.contact-btn');
    // const contactPopup = document.querySelector('.contact-popup');
    // const closeBtn = document.querySelector('.close');
    
    // contactBtn.addEventListener('click', () => {
    //   contactPopup.classNameList.add('show');
    // });
    
    // closeBtn.addEventListener('click', () => {
    //   contactPopup.classNameList.remove('show');
    // });

    return (
        <>
            <div className="contact-form">
                <button className="contact-btn" >Contact Us</button>
                <div className="contact-popup">
                    <div className="contact-content">
                        <h2>Contact Us</h2>
                        <form>
                            <p>Name:</p>
                            <div className="form-group">
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Name" />
                            </div>
                            <p>E-mail:</p>
                            <div className="form-group">
                                <input type="e-email" className="form-control" aria-describedby="emailHelp" placeholder="Enter E-mail" />
                            </div>
                            <div className="form-group">
                                <p>Message:</p>
                                <textarea className="form-control" rows="6" placeholder="Please type your query"></textarea>
                            </div>
                        </form>
                        <input className=" sub form-button btn btn-primary" type="submit" name="contact-sub" value="Submit" />
                        <button className="close btn btn-danger" >Close</button>
                    </div>

                </div>
            </div>




        </>
    )
}