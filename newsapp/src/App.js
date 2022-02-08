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
  render() {
    return( <div>
     
      <Router>
      <Navbar/>
      <Switch>

          <Route exact path="/">
          <News pageSize={3} key="science" category="science" country="in" />
          </Route>
          <Route exact path="/business">
          <News pageSize={3} key="business" category="business" country="in" />
          </Route>
          <Route exact path="/entertainment">
          <News pageSize={3} key="entertainment" category="entertainment" country="in" />
          </Route>
          <Route exact path="/general">
          <News pageSize={3} key="general" category="general" country="in" />
          </Route>
          <Route exact path="/health">
          <News pageSize={3} key="health" category="health" country="in" />
          </Route>
          <Route exact path="/sports">
          <News pageSize={3} key="sports" category="sports" country="in" />
          </Route>
          <Route exact path="/technology">
          <News pageSize={3} key="technology" category="technology" country="in" />
          </Route>
        </Switch>

      </Router>
    </div>
    )
  }
}
