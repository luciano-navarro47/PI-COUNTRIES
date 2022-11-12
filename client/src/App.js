import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import  LandingPage  from "./components/LandingPage"
import  Home from "./components/Home"
import CreateActivity from "./components/CreateActivity"
import CountryDetail from "./components/CountryDetail"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/activities" component={CreateActivity}/>
        <Route exact path="/countries/:id" component={CountryDetail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
