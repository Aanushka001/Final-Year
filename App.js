import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ParkingMap from './components/ParkingMap';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/map" component={ParkingMap} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;