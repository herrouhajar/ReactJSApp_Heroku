import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <nav>
        <div class="nav-wrapper">
           
           <a class="brand-logo center">Customers Information</a>
           <img class="left hide-on-med-and-down custom" src={require('./Customer.png')} />
           
        </div>
       </nav>

     { /* <header className="App-header">
    
      </header>*/}
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/customerlist"/>
                )}/>
                 <Route exact path='/customerlist' component={Customers} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
