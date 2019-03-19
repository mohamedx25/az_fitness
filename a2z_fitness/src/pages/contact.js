import React from "react";
import '../components/styles/contact.css'
// import Header from "../components/header"
import Footer from "../components/footer"
import 'bootstrap/dist/css/bootstrap.css'


class Contact extends React.Component{
    render(){
        return(
            <div>
            {/* <Header /> */}
                <div className='contact-container'>
                    <h1>Contact Me</h1>
                </div>
                <div className='container'>
                    <form>
                        <div>
                            <div className='form-group row'>
                                <label for='firstName'>First Name</label>
                                <input type='text' className='form-control' placeholder='First Name'></input>
                            </div>
                            <div className="form-group row">
                                <label for="lastName">Last Name</label>
                                <input type="text" className="form-control" placeholder="Last Name"></input>
                            </div>
                        </div>
                        <div>
                            <div className='form-group row'>
                                <label for='eMail'>E-mail</label>
                                <input type='text' className='form-control' placeholder='new123@gmail.com'></input>
                            </div>
                            <div className="form-group row">
                                <label for="cellPhone">Cell Phone</label>
                                <input type="number" className="form-control" placeholder="(123) 345-7893"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="exampleFormControlTextarea1">Comments</label>
                            <textarea class="form-control" rows="5" placeholder='Describe your goals here'></textarea>
                        </div>
                        <div className='form-btn'>
                            <button type="button" class="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact;