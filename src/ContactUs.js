import { ContactSupportSharp } from "@mui/icons-material"
import react from "react"



export default function ContactUS() {
   
    return (
        <>
            <div class="contact-form">
                <button class="contact-btn" >Contact Us</button>
                <div class="contact-popup">
                    <div class="contact-content">
                        <h2>Contact Us</h2>
                        <form>
                            <p>Name:</p>
                            <div class="form-group">
                                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter Name" />
                            </div>
                            <p>E-mail:</p>
                            <div class="form-group">
                                <input type="e-email" class="form-control" aria-describedby="emailHelp" placeholder="Enter E-mail" />
                            </div>
                            <div class="form-group">
                                <p>Message:</p>
                                <textarea class="form-control" rows="6" placeholder="Please type your query"></textarea>
                            </div>
                        </form>
                        <input class=" sub form-button btn btn-primary" type="submit" name="contact-sub" value="Submit" />
                        <button class="close btn btn-danger" >Close</button>
                    </div>

                </div>
            </div>




        </>
    )
}