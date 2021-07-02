import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase-utils'
import Home from './Home/index'
import Stream from './Stream';

function App() {
  const [user, setuser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setuser(user)
    })
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact render={() => <Home user={user} />} />
        {user ? <Route path='/Watch-list' render={() => <div style={{color:'#fff'}}>WATCHLIST</div>}/> : null}
        <Route path='/:title' render={() => <Stream user={user}/>} />
      </Switch>
    </div>
  );
}

export default App;
