import React from 'react';


class Contact extends React.Component {


    render() {
        return (
            <div className="container-md ">
                <div className="card card_style my-5 p-4 animate__animated animate__fadeInDownBig">
                    <form >
                        <div className="form-group ">
                            <label htmlFor="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control " id="exampleFormControlTextarea1" rows="6"></textarea>
                        </div>
                    </form>
                    <div className="card text-dark bg-dark border-dark text-center">
                        <div className="card-body  text-light ">
                            <p className="card-text">Replies within one to two hours.</p>
                            <button className="btn btn-primary btn_style">Submit Message</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Contact;