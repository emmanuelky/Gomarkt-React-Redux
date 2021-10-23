import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MyNavBar from './components/MyNavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';

function App() {
  return (
    <div className="bg-yellow-300 h-screen w-screen">
      <Router>
        <MyNavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />

        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
