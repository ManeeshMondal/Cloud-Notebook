import './App.css';  
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Start from './components/Start'
import NoteState from './context/notes/NoteState';
import SignUp from './components/SignUp';
import LogIn from './components/Login';
import { useState } from 'react';
import Alert from './components/Aleart';


function App() {
  const [alert, setAlert] = useState(null);

  // alerts settings 
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
      })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  return (
    <>
    <NoteState>
     <Router>
      <Navbar/>
      <Alert alert={alert}/>
       <div className="container">
        <Switch>
        <Route exact path="/">
            <Start/>
          </Route>
        <Route exact path="/home">
            <Home showAlert={showAlert} />
          </Route>
          <Route exact path="/login">
            <LogIn showAlert={showAlert} />
          </Route>

          <Route exact path="/signup">
            <SignUp showAlert={showAlert} />
          </Route>

          <Route exact path="/about">
            <About/>
          </Route>
        
        </Switch>
        </div>
     </Router>
   </NoteState>
  </>
  );
}

export default App;
