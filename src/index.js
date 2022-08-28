

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header'
import Footer from './components/Footer'
import About from './components/about'
import Service from './components/service'
import contact from './components/contact';
import UseHistory from './components/useHistory'




const Routing = () => {
  return(
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/contact" component={contact} />
        <Route path="/:id" component={UseHistory} />
      </Switch>
      <Footer/>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);