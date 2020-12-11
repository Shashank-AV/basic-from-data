import React, { Component} from 'react';
import "./App.css";
import { Switch, Route } from "react-router-dom";
import wellcome from "./components/wellcome";
import FormPage from "./components/detailsFormPage";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={FormPage} />
        <Route path="/wellcome" component={wellcome} />
      </Switch>
    );
  }
}

export default App;
