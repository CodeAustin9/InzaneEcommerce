import React from "react"
import {BrowserRouter as Router, Route} from "react-router dom";
import NavTabs from "./components/pages/NavTabs";
import Home from "./components/pages/Home";
import Environmental from "./components/pages/Environmental";
import Account from "./components/pages/Account";
import Locations from "./components/pages/Locations";
import Products from "./components/pages/Products";
import Login from "./components/pages/Login";

const App = () => (
  <Router>
    <div>
      <NavTabs/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Environmental" component={Environmental}/>
      <Route exact path="/Account" component={Account}/>
      <Route exact path="/Locations" component={Locations}/>
      <Route exact path="/Products" component={Products}/>
      <Route exact path="/Login" component={Login}/>
    </div>
  </Router>
  )

  
export default App;
