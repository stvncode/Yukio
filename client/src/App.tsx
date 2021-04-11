import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { HomePage } from './Components/Homepage/HomePage';
import { LoginPage } from './Components/LoginPage/LoginPage';
import { Navbar } from './Components/Navbar/Navbar';
import { myContext } from './Context/UserContext';

export const App: React.FC = () => {

  const userObject = useContext(myContext)

  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/' exact component={HomePage} />
      {!userObject ? <Route path='/login' component={LoginPage} /> : null}
      <Redirect exact from='/login' to='/' />
    </BrowserRouter>
  )
}
