import React, { useEffect } from 'react';
import Login from '../component/Login';
import Register from '../component/Register';
import Loginbtn from '../component/Loginbtn';
import Registerbtn from '../component/Registerbtn';



function Startup() {
    useEffect(() => {
        return () => {
            document.body.style.paddingTop = '3.5rem';
            document.body.style.overflowY = 'scroll';
        }
    });



    document.body.style.paddingTop = 0;
    document.body.style.overflowY = 'hidden';
    return (
        <div className="container-fluid ">
            <div className="row animate__animated animate__fadeInDownBig">
                <div className="card ">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="img\anime-girl-christmas-pink-hair-semi-realistic-petals-deer-horns-anime-11545.jpg" className="d-block w-100 card-img" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src="img/banner2.jpg" className="d-block w-100 card-img" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src="img/banner5.jpg" className="d-block w-100 card-img" alt="..."></img>
                            </div>
                        </div>
                    </div>
                    <div className="card-img-overlay header_overlay ">
                        <div className="header_content">
                            <h1 className="card-title text-white ">Digital Art</h1>
                            <p className="card-text text-white ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut   reiciendis
                                expedita quaerat et hic mollitia esse neque sunt modi eos quidem distinctio, illo possimus, quam culpa eum
                                unde autem maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, enim non pariatur
                                voluptate repellendus, id est excepturi natus facere perspiciatis consequatur. Ut vel rerum possimus
                                officia corrupti libero exercitationem vitae!</p>
                            <div className='row   justify-content-center'>
                                <div className='col-0 mx-1'>
                                    <Loginbtn />
                                </div>
                                <div className='col-0 mx-1'>
                                    <Registerbtn />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <Login />
            <Register />
        </div>
    );

}








export default Startup; 