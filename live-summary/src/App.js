import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navpage from './components/Navpage'

function App() {
  return (
    <div className="App">
      <Navpage/>
      <Router>
       <Route exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
