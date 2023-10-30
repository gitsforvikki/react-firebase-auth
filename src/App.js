import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layouts/Home";
import Signup from "./modules/user/Signup";
import Signin from "./modules/user/Signin";
import Navbar from "./layouts/Navbar";
import { auth } from "./firebase";

let App = () => {

  let [userName , setUserName] = useState('');

  // fill the user name from firebase response as soon as page loaded
  useEffect(()=>{
    auth.onAuthStateChanged( (user)=>{
      setTimeout(()=>{
        {
           user ? setUserName(user.displayName) : setUserName('')
        }
      } , 2000)
      console.log(user);
    });
  } ,[]);


  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home userName={userName}  />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
