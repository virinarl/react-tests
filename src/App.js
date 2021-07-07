import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/elements/Header";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import Cart from "./components/pages/Cart";
import Sales from "./components/pages/Sales";
import AboutUs from "./components/pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/sales">
            <Sales />
          </Route>
          <Route path="/about_us">
            <AboutUs />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
