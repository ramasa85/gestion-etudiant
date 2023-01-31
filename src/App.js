//import logo from './logo.svg';
import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

//import Header from "./crud/header";
import RegistrationForm from "./crud/registrationForm";
import Navbar from "./layout/navbar";
import AddStudent from "./crud/AddStudent";
import EditStudent from "./crud/EditStudent";
//import Students from "./crud/Students";

import { Routes,Route, HashRouter} from 'react-router-dom';
import Home from './crud/Home';
//import CRUD from './crud/crud';

//import "./index.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
          <Routes>
            <Route path = '/' element = {<Home/>} ></Route>
            <Route path = '/registrationForm' element = {<RegistrationForm/>} ></Route>
            <Route path = '/AddStudent' element = {<AddStudent/>} ></Route>
            <Route path = '/EditStudent' element = {<EditStudent/>} ></Route>
        </Routes>
      </HashRouter>
    </div>
  );
  }
  <h1>Bonjour</h1>
    
export default App;
