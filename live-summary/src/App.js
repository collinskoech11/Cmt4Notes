import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navpage from './components/Navpage';
import FooterPage from './components/FooterPage';
import ComputerScience from './pages/ComputerScience';
import Cmt406 from './pages/CsUnits/Cmt406';
import Cmt413 from './pages/CsUnits/Cmt413'

function App() {
  return (
    <div className="App">
      <Navpage/>
      <Router>
       <Route exact path="/" component={Home}/>
       <Route path="/ComputerScience" component={ComputerScience}/>
       <Route path="/Cmt406" component={Cmt406}/>
       <Route path="/Cmt413" component={Cmt413}/>
      </Router>
      <FooterPage/>
    </div>
  );
}

export default App;
