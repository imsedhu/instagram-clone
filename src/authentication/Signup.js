import React, { useState } from 'react'
import './Signup.css'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import FacebookIcon from '@mui/icons-material/Facebook';
import Line from './Line';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, {
            displayName: username,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className='signup'>
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <div className="signup-title">
      Sign up to see photos and videos from your friends.
      </div>
      <div className="fb-signup">
        <FacebookIcon className='fb-icon' />
        <p className='fb-sign'>Log in with Facebook</p>
      </div>
      <div className="line">
      <Line /> <span>OR</span> <Line />
      </div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
    </div>
  )
}

export default Signup