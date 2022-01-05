import React from 'react'
import styles from '../src/myStyles.module.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import User from './component/User/User';
import Navigation from './component/Navigation';
import Forgotpassword from './component/ForgotPassword/Forgotpassword';
import Resetpassword from './component/Resetpassword/Resetpassword';

function App() {
  return (
    <div className = {styles.app}>   
    <Navigation/>
     <BrowserRouter>
     <Routes>
       <Route path = "/user" element = {<User/>}/>
       <Route path = "/token" element = {<Forgotpassword/>}/>
       <Route path = "/password-reset/:userId/:token" element = {<Resetpassword/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
