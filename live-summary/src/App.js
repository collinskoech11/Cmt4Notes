import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
       <Route exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
