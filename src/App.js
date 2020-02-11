import React from "react";
import "./App.css";
import ProductDetail from './components/ProductDetail/ProductDetail';
import AppList from './components/AppList';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
        <Switch>
          <Route exact path="/">
            <AppList />
          </Route>
          <Route path="/productDetail">
          <ProductDetail />
          </Route>
        </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}



export default App;
