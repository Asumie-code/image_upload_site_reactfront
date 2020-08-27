import React from 'react';
import Axios from 'axios';
import $ from 'jquery';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }


 





    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        
    }



    handleSumbit = (e) => {
        e.preventDefault();
        // let url = 'http://localhost:5000/gallery';
        // let form = e.target; 
        // let mdal = $('#Login');
        
        
        // Axios.post(url, this.state).then((res) => {
        //     console.log(res);
        //     form[0].value = '';
        //     form[1].value = '';
        //     form[2].value = '';
        //     mdal.modal('hide');
        // }).catch(e => {console.log(e)})
    }



    render() {
        return (
            
            <>
                <div className="modal my-5 p-xl-5 trans_style " id='Login' >
                    <button type="button" className="btn btn-primary text-white  close my-2 p-2" data-dismiss="modal"
                        aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <div className="card card_style " style={{ width: 100 + "%" }}>
                        <div className="card-body">
                            <form  onSubmit={this.handleSumbit} className='p-5 bg-dark'>
                                <div className='form-group mt-2'>
                                    <label htmlFor="email">Email</label>
                                    <input onChange={this.handleChange} name='email' type="email" className="form-control" placeholder="email" id='email' value={this.state.email} required></input>
                                </div>
                                <div className='form-group mt-2'>
                                    <label htmlFor="password">Password</label>
                                    <input onChange={this.handleChange} name='password' type="password" className="form-control" placeholder="Password" value={this.state.password} id='pass' required></input>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>

                    </div>

                </div>
            </>
        );
    }
}



export default Login;