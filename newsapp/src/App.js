import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, { Component } from 'react';
import Navbar from './Componants/Navbar';
import News from './Componants/News';



export default class App extends Component {

apikey='a12e0c47a7004318995856ed387989ba'

  render() {
    return( <div>
     
      <Router>
      <Navbar/>
      <Switch>

          <Route exact path="/">
          <News pageSize={3} key="science"   category="science" apikey={this.apikey} country="in" />
         </Route> 
          <Route exact path="/business"> 
          <News pageSize={3} key="business"  category="business" apikey={this.apikey} country="in" />
          </Route> 
          <Route exact path="/entertainment ">
          <News pageSize={3} key="entertain ment" category="entertainment" apikey={this.apikey} country="in" />
          </Route> 
          <Route exact path="/general"> 
          <News pageSize={3} key="general" category="general" apikey={this.apikey} country="in" />
          </Route>
          <Route exact path="/health">
          <News pageSize={3} key="health" category="health" apikey={this.apikey} country="in" />
          </Route>
          <Route exact path="/sports">
          <News pageSize={3} key="sports" category="sports" apikey={this.apikey} country="in" />
          </Route>
          <Route exact path="/technology">
          <News pageSize={3} key="technology" category="technology" apikey={this.apikey} country="in" />
          </Route>
        </Switch>

      </Router>
    </div>
    )
  }
}
