import './App.css';
import MainPage from './pages/MainPage/MainPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NumbersFound from './pages/NumbersFond/NumbersFond';
import FoodPage from './pages/Food/FoodPage';
import BanketPage from './pages/Banket/BanketPage';
import ChildPage from './pages/Child/ChildPage';
import TerritoryPage from './pages/Territory/TerritoryPage';
import MoneyPage from './pages/Money/MoneyPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/money' exact>
            <MoneyPage />
          </Route>
          <Route path='/territory' exact>
            <TerritoryPage />
          </Route>
          <Route path='/child' exact>
            <ChildPage />
          </Route>
          <Route path='/banket' exact>
            <BanketPage />
          </Route>
          <Route path='/food' exact>
            <FoodPage />
          </Route>
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
