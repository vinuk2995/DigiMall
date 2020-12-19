import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login/Login'

class App extends Component {
  render() {
    return (
      <div >
       <BrowserRouter>
            <div className="App" >
            
            <Route exact path="/" component={Login}/>
              
                <Switch>
                   
                    <Route path="/cart" component={Cart}/>
                    <Route path="/dashboard" component={Home}/>
                  </Switch>
             </div>
       </BrowserRouter>
      </div>
    );
  }
}

export default App;
