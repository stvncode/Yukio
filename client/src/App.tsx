import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { Account } from './Components/Account/Account';
import { AdminPage } from './Components/Admin/AdminPage';
import { Help } from './Components/Help/Help';
import { HomePage } from './Components/Homepage/HomePage';
import { LoginPage } from './Components/LoginPage/LoginPage';
import { Navbar } from './Components/Navbar/Navbar';
import { myContext } from './Context/UserContext';
import { IUser } from './types/maintypes';

export const App: React.FC = () => {

  const userObject = useContext(myContext) as IUser

  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/' exact component={HomePage} />
      <Route path='/help' exact component={Help} />
      {!userObject ? <Route path='/login' component={LoginPage} /> : null}
      { userObject?.isAdmin === true ? <Route path='/admin' component={AdminPage} /> : null}
      {userObject ? <Route path='/account' component={Account} /> : null}
      <Redirect exact from='/login' to='/' />
    </BrowserRouter>
  )
}
