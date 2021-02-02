import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navpage from './components/Navpage';
import FooterPage from './components/FooterPage';
import ComputerScience from './pages/ComputerScience';
import Cmt406 from './pages/CsUnits/Cmt406';
import Cmt413 from './pages/CsUnits/Cmt413';
import Cmt447 from './pages/CsUnits/Cmt447';
import Cmt446 from './pages/CsUnits/Cmt446';
import System from './pages/CsUnits/System';
import Loading from "./Loading";
import ScrollTop from "react-scrolltop-button";

function App() {
  return (
    <div className="App">
      <Navpage/>
      <Loading/>
      <Router>
       <Route exact path="/" component={Home}/>
       <Route path="/ComputerScience" component={ComputerScience}/>
       <Route path="/Cmt406" component={Cmt406}/>
       <Route path="/Cmt413" component={Cmt413}/>
       <Route path="/Cmt447" component={Cmt447}/>
       <Route path="/Cmt446" component={Cmt446}/>
       <Route path="/System" component={System}/>
      </Router>
      <FooterPage/>
      <ScrollTop />
    </div>
  );
}

export default App;
