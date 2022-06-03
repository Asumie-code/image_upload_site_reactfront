import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import { useLogUserMutation } from '../features/api/apiSlice'

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



function Login() {
    const [login] = useLogUserMutation(); 
    const [formInputs, setFormInputs] = useState({
        email: '',
        password: ''
    });
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) setRedirect(true);
    }, []);


    const handleChange = (e) => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        });

    }


    const handleSumbit =  async (e) => {
        e.preventDefault();
        const data = {
            email: formInputs.email,
            password: formInputs.password
        };




        try {
         const response =  await login({data}).unwrap();
         console.log( response) 
            if( response) {
                localStorage.setItem('jwt', response.jwt);
                    let mdal = $('#Login')
                    mdal.modal('hide')
                    successToast.fire();
                    setRedirect(true);
            }
        } catch(err) {
            console.log(err); 
            failToast.fire();
        }





        // Axios.post(url, data).then(res => {
        //     localStorage.setItem('jwt', res.data.jwt);
        //     let mdal = $('#Login')
        //     mdal.modal('hide')
        //     successToast.fire();
        //     setRedirect(true);
        // }).catch(() => {
        //     failToast.fire();
        // })
    }


    if (redirect) return <Redirect to='/' />
    return (

        <>
            <div className="modal my-5 p-xl-5 trans_style " id='Login' >
                <button type="button" className="btn btn-primary text-white  close my-2 p-2" data-dismiss="modal"
                    aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <div className="card card_style " style={{ width: 100 + "%" }}>
                    <div className="card-body">
                        <form onSubmit={handleSumbit} className='p-5 bg-dark'>
                            <div className='form-group mt-2'>
                                <label htmlFor="email">Email</label>
                                <input onChange={handleChange} name='email' type="email" className="form-control" placeholder="email" id='email' value={formInputs.email} required></input>
                            </div>
                            <div className='form-group mt-2'>
                                <label htmlFor="password">Password</label>
                                <input onChange={handleChange} name='password' type="password" className="form-control" placeholder="Password" value={formInputs.password} id='pass' required></input>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>

                </div>

            </div>
        </>
    );



}







export default Login;