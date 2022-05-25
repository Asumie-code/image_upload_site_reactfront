import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Home from './Home';
import Gallery from './Gallery';
import Videos from './Videos';
import Contact from './Contact';
import About from './About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import Axios from 'axios';



function Dashboard() {
  const [user, setUser] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt === null) {
      setRedirect(true);

    } else {
      Axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
      Axios.defaults.headers.common['Content-Type'] = `application/json`;
      const url = 'http://localhost:5000/user';
      Axios.get(url).then(res => {
        setUser(res.data);
      }).catch((e) => {
        console.log(e);
        localStorage.clear();
        setRedirect(true);
      });


    }
  }, [])

  const logOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    setRedirect(true);
  }


  if (redirect) return <Redirect to='/startup' />
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact strict path='/'>
            <Home logOutEvent={logOut} name={user.name} />
          </Route>
          <Route exact strict path='/gallery'>
            <Gallery />
          </Route>
          <Route exact strict path='/videos'>
            <Videos />
          </Route>
          <Route exact strict path='/contact'>
            <Contact />
          </Route>
          <Route exact strict path='/about'>
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>

    );

}







export default Dashboard;
