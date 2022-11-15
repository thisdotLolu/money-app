// import './App.css'
import { Redirect } from 'react-router-dom';
import {Routes,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';



function App() {
  const{authIsReady, user}=useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            {!user && <Redirect to='/login'/>}
            {user && <Home/>}

          </Route>
          <Route exact path='/login'>
            {user && <Redirect to='/'/>}
            {!user && <Login/>}
          </Route>
          <Route exact path='/signup'>
            {user && <Redirect to='/'/>}
            {!user && <Signup/>}
          </Route>
        </Switch>
        </>
      )}
      
    </div>
  );
}

export default App
