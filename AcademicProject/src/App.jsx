import React from 'react'
import Mainpage from './Compnent1/Mainpage'
import HomePage from './HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Compnent1/LoginPage';
import SignupPage from './Compnent1/SignupPage';
import RithuDes from './RithuDes';
import AnitaDes from './AnitaDes';
import LocateStore from './LocateStore';
import Contect from './Contect';
import Whishlist from './Whishlist';
import AddCart from './AddCart';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Rithu" element={<RithuDes/>}/>
        <Route path="/Anita" element={<AnitaDes/>}/>
       <Route path="/LocateStore" element={<LocateStore />} /> 
       <Route path="Contect" element={<Contect/>}/>
       <Route path="/Whishlist" element={<Whishlist/>}/>
        <Route path="/AddCart" element={<AddCart/>}/>

   </Routes>
    </Router>
   
  )
}

export default App

