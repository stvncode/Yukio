import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Account } from './Components/Account/Account';
import { AccountData } from './Components/Account/account-data/AccountData';
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
      {userObject ? 
      <>
        <Switch>
          <Route exact path='/account' component={Account} /> 
          <Route exact path='/account/data' component={AccountData} /> 
        </Switch>
      </>
      : null}
      <Redirect exact from='/login' to='/' />
    </BrowserRouter>
  )
}
