import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navpage from './components/Navpage';
import FooterPage from './components/FooterPage';
import DemoCarousel from './components/DemoCarousel';
import ComputerScience from './pages/ComputerScience'
import Cmt406 from './pages/CsUnits/Cmt406'

function App() {
  return (
    <div className="App">
      <Navpage/>
      <DemoCarousel/>
      <Router>
       <Route exact path="/" component={Home}/>
       <Route path="/ComputerScience" component={ComputerScience}/>
       <Route path="/Cmt406" component={Cmt406}/>
      </Router>
      <FooterPage/>
    </div>
  );
}

export default App;
