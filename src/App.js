
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import NoMatch from './Components/NoMatch/NoMatch';
import Destination from './Components/Destination/Destination';
import Header from './Components/Header/Header';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



export const userContext = createContext();
function App() {
  const [login, setLogin] = useState({});
  return (
       <userContext.Provider value={[login, setLogin]}>
          <Router>
            <Header/>
              <Switch>
                <Route path='/home'>
                    <Home/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route path='/signup'>
                  <SignUp/>
              </Route>
              <PrivateRoute path='/destination/:title'>
                  <Destination/>
              </PrivateRoute>
              <PrivateRoute path='/destination'>
                    <Destination/>
              </PrivateRoute>
               <Route exact path='/'>
                 <Home/>
              </Route>
              <Route path='*'>
                <NoMatch/>
            </Route>
          </Switch>
        </Router>
       </userContext.Provider>
  );
}

export default App;
