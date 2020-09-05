import React from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';

const successToast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    icon: "success",
    title: "Logged in successfully",
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  

  const failToast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    icon: "error",
    title: "Log in fail",
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false
        }
    }


    componentDidMount() {
        const jwt = localStorage.getItem('jwt');
        if (jwt) this.setState({redirect: true});
    }


 





    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        
    }



    handleSumbit = (e) => {
        e.preventDefault();
        const url = 'http://localhost:5000/login';
        const data = {
            email: this.state.email,
            password: this.state.password
        };
        Axios.post(url, data).then(res => {
            localStorage.setItem('jwt', res.data.jwt);
            let mdal = $('#Login')
            mdal.modal('hide')
            successToast.fire();
            this.setState({
                redirect: true
            });
        }).catch(() => {
            failToast.fire();
        })
    }



    render() {
        if(this.state.redirect) return <Redirect to='/' />
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