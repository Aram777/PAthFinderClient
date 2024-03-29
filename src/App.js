import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculate from './Routes/Calculation/Calculation';
import Objects from './Routes/Objects/Objects';
import Building from './Routes/Building/Building';
import 'typeface-roboto';
import Materials from './Routes/Materials/Materials';
import CalcResults from './Routes/CalcResult/Results.js';

function App({ children }) {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path="/building" exact component={Building} />
          <Route path="/objects" exact component={Objects} />
          <Route path="/materials" exact component={Materials} />
          <Route path="/calculate" exact component={Calculate} />
          <Route path="/result" exact component={CalcResults} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
