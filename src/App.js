import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import LandingScreen from './components/LandingScreen/LandingScreen.component';
import HomeScreen from './components/HomeScreen/HomeScreen.component';
import ProfileScreen from './components/ProfileScreen/ProfileScreen.component';

import { auth } from './firebase/firebase.util';
import {useDispatch,useSelector} from 'react-redux';
import {login,logout,selectUser} from './features/user/userSlice';

function App() {
  const user = useSelector(selectUser);
  console.log(user,'user data');
  const Dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth) {
        Dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }));

      }
      else {
        Dispatch(logout());
      }
    });

    return unsubscribe;
  }, [Dispatch])

  return (
    <div className="App">
      
      <BrowserRouter>
      {
        user ? 
        <Switch>
          <Route path='/' exact component={HomeScreen}/>
          <Route path='/profile' exact component={ProfileScreen}/>
        </Switch>
        :
        <LandingScreen/>
      }
      </BrowserRouter>

    </div>
  );
}

export default App;
