import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Home from './Home';
import Gallery from './Gallery';
import Videos from './Videos';
import Contact from './Contact';
import About from './About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect }  from 'react-router-dom';
import Axios from 'axios';







class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      user: {},
      redirect: false
    }
    
  }
  

  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    if(jwt === null) {
      this.setState({ redirect: true });

    } else {
      Axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
      Axios.defaults.headers.common['Content-Type'] = `application/json`;
      const url = 'http://localhost:5000/user';
      Axios.get(url).then( res => {
        this.setState({user: res.data});
      }).catch( (e) => {
        console.log(e);
        localStorage.clear();
        this.setState({redirect: true});
      });
      

    }
    
  }


  logOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    
    this.setState({
      redirect: true
    })
  }





  render() {
    
    if (this.state.redirect) return  <Redirect to='/startup' />
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact strict path='/'>
            <Home logOutEvent={this.logOut} name={this.state.user.name} />
          </Route>
          <Route exact strict path='/gallery'>
            <Gallery  />
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

}



export default Dashboard;
