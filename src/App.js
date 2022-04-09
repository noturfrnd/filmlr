import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
      
        <Switch>
          <Route exact path='/'>
            <WatchList/>
          </Route>

          <Route exact path='/add'>
            <Add />
          </Route>

          <Route exact path='/watched'>
            <Watched />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
