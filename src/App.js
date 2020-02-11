import React from "react";
import "./App.css";
import ProductDetail from './components/ProductDetail/ProductDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <ProductDetail />
        </Route>
        <Route path="/appInstall">
          <div>App Install</div>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
