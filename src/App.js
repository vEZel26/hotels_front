import './App.css';
import MainPage from './pages/MainPage/MainPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NumbersFound from './pages/NumbersFond/NumbersFond';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/numbers' exact>
            <NumbersFound />
          </Route>
          <Route path='/' exact>
            <MainPage />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
