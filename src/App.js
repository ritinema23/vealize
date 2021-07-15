import Crypto from './components/cryptocurrency/Crypto'
import Covid from './components/covid/Covid'
import BarChart from './components/barchart/BarChart'
import Header from './components/Header'
import Home from './components/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component= {Home} />
        <Route path="/crypto" component= {Crypto} />
        <Route path="/covid" component= {Covid} />
        <Route path="/barchart" component={BarChart}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App; 
