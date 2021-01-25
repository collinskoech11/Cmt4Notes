import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navpage from './components/Navpage';
import FooterPage from './components/FooterPage';
import DemoCarousel from './components/DemoCarousel'

function App() {
  return (
    <div className="App">
      <Navpage/>
      <DemoCarousel/>
      <Router>
       <Route exact path="/" component={Home}/>
      </Router>
      <FooterPage/>
    </div>
  );
}

export default App;
