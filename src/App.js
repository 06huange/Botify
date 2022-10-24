import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Y2S from './y2s'
import Home from './Home'
import Navigation from './Navigation'
import UserHome from './UserHome'

function App() {
  const [isLoggedIn, setLoginStatus] = useState(false);
  return (
    <>
    <Navigation setLoginStatus={value => setLoginStatus(value)}/>
      <Routes>
        <Route path='/y2s' element={<Y2S />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/userHome' element={<UserHome />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
}




export default App;
