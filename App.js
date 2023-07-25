import React  from 'react';

import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './Componets/Home';
import AddUser from './Componets/AddUser';
import  EditUser from './Componets/EditUser';

const App = () => {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
      <Router>
  
        <Routes>
        <Route path='/add' Component={AddUser}/>
          <Route path='/edit/:id' Component={EditUser}/>
          <Route path= '/Home' Component={Home}/>
          
            
        </Routes>
      </Router>
      
    </div>
  )
}

export default App



