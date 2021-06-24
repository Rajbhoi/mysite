import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import { Switch, Route } from "react-router-dom";
import Footer from './Footer';
import { siteData } from './Data';


function App() {
  return (
    <>
      {
        siteData.header &&
        <Navbar navbar={siteData.header} />
      }

      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/about-us" component={About} />
      </Switch>

      {
        siteData && siteData.footer &&
        <Footer foot={siteData.footer} />
      }
    </>
  );
}

export default App;
