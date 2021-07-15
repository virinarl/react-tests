import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/elements/Header";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import Cart from "./components/pages/Cart";
import Sales from "./components/pages/Sales";
import Footer from "./components/elements/Footer";
import ProductDetail from "./components/pages/ProductDetail";
import CheckOut from "./components/pages/CheckOut";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/store" component={Store} />
            <Route path="/store/:productId" component={ProductDetail} />
            <Route path="/sales" component={Sales} />
            <Route path="/cart" component={Cart} />
            <Route path="/check_out" component={CheckOut} />
          </Switch>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
