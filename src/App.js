import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MyNavBar from './components/MyNavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-yellow-300 h-screen w-screen">
      <Router>
        <MyNavBar />
        <Switch>

        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
