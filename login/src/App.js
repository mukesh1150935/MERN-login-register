import { useState } from 'react';
import './App.css';
import Register from './components/register';
import Login from './components/login';
import Homepage from './components/homepage';

import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App() {
const [user,setLoginUser]=useState({})
// const [success,setSuccess]=useState(false)

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={user&&user._id?<Homepage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>

     {/* <Homepage/>
     <Register/>
     <Login/> */}
    </div>
  );
}

export default App;
