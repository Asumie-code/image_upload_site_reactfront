import React from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './views/Home';
import Gallery from './views/Gallery';
import Videos from './views/Videos';
import Contact from './views/Contact';
import About from './views/About';
import Startup from './views/Startup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <>
    //   <Startup />
    // </>
    <Router>
      <Navbar /> 
        <Switch>
          <Route exact strict path='/'>
          <Home />
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

export default App;
