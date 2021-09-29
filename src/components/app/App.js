import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route, 
  Redirect 
} from 'react-router-dom';
import Homepage from '../homepage/Homepage';


export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path ="/" component={Homepage} />
          <Redirect to="/" />
        </Switch> 
      </Router>
    </>
  );
};
