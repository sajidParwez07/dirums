import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/logIn';
import SignUp from './Components/signUp';
import PersonalDetails from './Components/personal-Details';
import Termsconditon from './Components/terms&conditon';


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<SignUp />} />
          <Route exact path='/pdetails' element={<PersonalDetails />} />
          <Route exact path='/terms&condition' element={<Termsconditon />} />
          <Route exact path='/login' element={<LoginPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;


