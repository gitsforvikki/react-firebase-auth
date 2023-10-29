import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { auth } from "../../firebase";

let Signin = () => {
  let navigate = useNavigate();
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  let [errorMsg, setErrorMessage] = useState("");


  let updataUserstate = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  let submitUserData=(event)=>{
    event.preventDefault();
    let { email, password } = user;
    if ( email && password){
       //authentication configuration start
      // setSubmitButtonDisabled(true);
       signInWithEmailAndPassword(auth, user.email, user.password)
         .then( async(res) => {
           //setSubmitButtonDisabled(false);
           
            await updateProfile(res.user , {
            displayName:user.name
           })
           
           if( res){
             navigate('/');
           }
           setUser({
             name: "",
             email: "",
             password: "",
           })
           console.log(res);
         })
         .catch((err) => {
           //setSubmitButtonDisabled(false);
           setErrorMessage(err.message);
           console.log(err.message);
         });
          //authentication configuration end
 

    }else {
      setErrorMessage("All fields required.");
    }
  }
  return (
    <React.Fragment>
      <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div>
          <span className="text-2xl">Sign in your account</span>
          <div className="bg-indigo-400 h-2 mt-5 rounded-t-md"></div>
          <div className="shadow-md hover:shadow-2xl">
            <form className="px-8 py-6 bg-white">
              <div className="mb-3">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={updataUserstate}
                  className=" border-none px-4 py-2 rounded hover:outline-none  
                   focus:outline-none focus:ring-1 focus:ring-indigo-400 "
                  placeholder="name@shopops.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  for="Password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={updataUserstate}
                  className=" w-full border px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  placeholder="********"
                  required
                />
              </div>
              <div className="my-6 flex justify-between items-baseline">
                <button
                  type="submit"
                  onClick={submitUserData}
                  className="bg-indigo-500 px-4 py-2 text-white rounded hover:bg-indigo-600  hover:shadow-indigo-500 hover:shadow-4lg"
                >
                  Login
                </button>
                <a href="#" className="text-sm hover:underline">
                  forgot password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Signin;
