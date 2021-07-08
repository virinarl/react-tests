import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/elements/Header";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import Cart from "./components/pages/Cart";
import Sales from "./components/pages/Sales";
import AboutUs from "./components/pages/AboutUs";
import Footer from "./components/elements/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={Store} />
          <Route path="/store/:id" component={Store} />
          <Route path="/sales" component={Sales} />
          <Route path="/about_us" component={AboutUs} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
