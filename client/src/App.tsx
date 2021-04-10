import React, { useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { HomePage } from './Components/Homepage/HomePage';
import { LoginPage } from './Components/LoginPage/LoginPage';
import { Navbar } from './Components/Navbar/Navbar';
import { myContext } from './Context/UserContext';

export const App: React.FC = () => {

  const userObject = useContext(myContext)
  console.log('AAAA', userObject)
  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/' exact component={HomePage} />
      <Route path='/login' component={LoginPage} />
    </BrowserRouter>
  )
}
