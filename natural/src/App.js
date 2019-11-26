import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home/home';
import FixedNav from './Components/StaticComponents/fixedNavBar';
import Classes from './Components/Classes/classes';
import Services from './Components/Services/services';
import Contact from './Components/Contact/contact'
import Footer from './Components/StaticComponents/footer'

function App() {
  return (
    <div>
      <FixedNav />
      <Route exact path="/" component={Home} />
      <Route exact path="/classes" component={Classes} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </div>
  );
}

export default App;
