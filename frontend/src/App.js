import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.jpg';
import Navigation from './component/Navigation';
import Home from './pages/Home';
import History from './pages/History';
import OldTable from './pages/OldTable';
import NewTable from './pages/NewTable';
import Quiz from './pages/Quiz';
import Feedback from './pages/Feedback';
import {BrowserRouter,Route,Routes}from'react-router-dom';
import { HashRouter } from 'react-router-dom';


function App() {
  return (
  <HashRouter>
    <div className="App">
	
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navigation/><br/>
      </header>
	  
	  
	  <Routes>
	      <Route path="/Home" exact element={<Home/>}/>
		  <Route path="/History" exact element={<History/>}/>
		  <Route path="/OldTestament" exact element={<OldTable/>}/>
		  <Route path="/NewTestament" exact element={<NewTable/>}/>
		  <Route path="/Quiz" exact element={<Quiz/>}/>
		  <Route path="/Feedback" exact element={<Feedback/>}/>
		  </Routes>
    </div>
	</HashRouter>
  );
}

export default App;
