// import './App.css'
import {Routes,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';



function App() {
  const{authIsReady}=useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/signup'>
            <Signup/>
          </Route>
        </Switch>
        </>
      )}
      
    </div>
  );
}

export default App
