import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MyNavBar from './components/MyNavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductsPage from './components/ProductsPage';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className=" h-100 w-100">
      <Router>
        <MyNavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={ProductsPage} />
          <Route path="/products/:id" exact component={ProductDetail} />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
