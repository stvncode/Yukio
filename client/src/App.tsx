import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { style } from 'typestyle';
import { Account } from './Components/Account/Account';
import { AccountData } from './Components/Account/account-data/AccountData';
import { AccountNotifications } from './Components/Account/account-notifications/AccountNotifications';
import { AccountPoints } from './Components/Account/account-points/AccountPoints';
import { AccountPrivate } from './Components/Account/account-private/AccountPrivate';
import { AdminPage } from './Components/Admin/AdminPage';
import { Help } from './Components/Help/Help';
import { HomePage } from './Components/Homepage/HomePage';
import { LoginPage } from './Components/LoginPage/LoginPage';
import { Navbar } from './Components/Navbar/Navbar';
import { Process } from './Components/process/Process';
import { myContext } from './Context/UserContext';
import { IUser } from './types/maintypes';

const css = style({
  width: '100vw',
  height: '100vh'
})

export const App: React.FC = () => {

  const userObject = useContext(myContext) as IUser

  return (
    <div className={css}>
      <BrowserRouter>
      {userObject?.newProfile ? 
      <>
        <Route path='/' exact component={Process} />
      </>
        : 
        <>
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
              <Route exact path='/account/notifications' component={AccountNotifications} /> 
              <Route exact path='/account/private' component={AccountPrivate} /> 
              <Route exact path='/account/points' component={AccountPoints} /> 
            </Switch>
          </>
          : null}
          <Redirect exact from='/login' to='/' />
        </>
      }
      </BrowserRouter>
    </div>
  )
}
