// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/components/home';
import connectWallet from './pages/components/connectWallet';
import byEmail from './pages/components/byEmail';
import modelMinting from './pages/components/modelMinting';
import modelMintingRefresh from './pages/components/modelMintingRefresh';
import welcomeSpaceProgram from './pages/components/welcomeSpaceProgram';

import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/connectWallet' exact component={connectWallet} />
        <Route path='/byEmail' exact component={byEmail} />
        <Route path='/modelMinting' exact component={modelMinting} />
        <Route path='/modelMintingRefresh' exact component={modelMintingRefresh} />
        <Route path='/welcomeSpaceProgram' exact component={welcomeSpaceProgram} />
      </Switch>
    </Router>
  );
}

export default App;
