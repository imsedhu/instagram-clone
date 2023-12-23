
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNUQFxy_BP0VST5LbVNk3TbiUS8_oKclU",
  authDomain: "instagram-clone-1ea03.firebaseapp.com",
  projectId: "instagram-clone-1ea03",
  storageBucket: "instagram-clone-1ea03.appspot.com",
  messagingSenderId: "578285812020",
  appId: "1:578285812020:web:4e8a76ea98661421314d61"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();