import React from 'react';




function Home(props) {
  return (

    <main className="container-fluid ">
      <header className="row animate__animated animate__fadeInDownBig">
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
              <h1 className="card-title text-white ">Welcome back {props.name}</h1>
              <p className="card-text text-white ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut   reiciendis
              expedita quaerat et hic mollitia esse neque sunt modi eos quidem distinctio, illo possimus, quam culpa eum
              unde autem maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, enim non pariatur
              voluptate repellendus, id est excepturi natus facere perspiciatis consequatur. Ut vel rerum possimus
                  officia corrupti libero exercitationem vitae!</p>
              <button type="button" className="btn btn-dark p-3" onClick={props.logOutEvent}>Log out</button>
            </div>
          </div>
        </div>

      </header>


    </main>
  );


}




export default Home;