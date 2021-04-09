import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { HomePage } from './Components/Homepage/HomePage';
import { LoginPage } from './Components/LoginPage/LoginPage';
import { Navbar } from './Components/Navbar/Navbar';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/' exact component={HomePage} />
      <Route path='/login' component={LoginPage} />
    </BrowserRouter>
  )
}
