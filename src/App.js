import './App.css';
import Header from './components/Header';
import RecommendedVideo from './components/RecommendedVideo';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SearchPage from './components/SearchPage';



function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path = "/search/:searchTerm">
            <div className ="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route path = "/">
            <div className ="app__page">
              <Sidebar />
              <RecommendedVideo />
            </div>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
