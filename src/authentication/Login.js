import React, { useState } from 'react'
import './Login.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import FacebookIcon from '@mui/icons-material/Facebook';
import Line from './Line';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = () => {
    
    signInWithEmailAndPassword(auth, email, password);
   
  };

  
  return (
    <div className='login'>
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleLogin}>Log in</button>
      <div className="line">
      <Line /> <span>OR</span> <Line />
      </div>
       
      <div className="fb-login">
        <FacebookIcon className='fb-icon' />
        <p className='fb-log'>Log in with Facebook</p>
      </div>
      <div className="forgot-password">
        Forgotten your password?
      </div>
    </div>
  )
}

export default Login