import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

let Signin = () => {
  //for redirect page
  let navigate = useNavigate();

  //location state to store user info from users
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  //for locally store error if any
  let [errorMsg, setErrorMessage] = useState("");

  //event handller function
  let updataUserstate = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  //event handller function for submit user data
  let submitUserData = (event) => {
    //prevent page refresh
    event.preventDefault();

    //destructuring
    let { email, password } = user;

    if (email && password) {
      //login configuration start
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          localStorage.setItem("isLoggedIn", true);
          navigate("/");
          setUser({
            email: "",
            password: "",
          });
          console.log(res);
        })
        .catch((err) => {
          setErrorMessage(err.message);
          localStorage.setItem("isLoggedIn", false);
          console.log(err.message);
        });

      //login configuration end
    } else {
      setErrorMessage("All fields required.");
    }
  };

  return (
    <React.Fragment>
      <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div>
          <span className="text-2xl">Sign in your account</span>
          <div className="bg-indigo-400 h-2 mt-5 rounded-t-md"></div>
          <div className="shadow-md hover:shadow-2xl">
            {/* form */}
            <form className="px-8 py-6 bg-white">
              {/* email field */}
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

              {/* password field */}
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

              {/* for show error if any  */}
              {errorMsg && (
                <div className="text-center text-sm text-red-600">
                  <span className="">{errorMsg}</span>
                </div>
              )}

              {/* submit button */}
              <div className="my-6 flex justify-between items-baseline">
                <button
                  type="submit"
                  onClick={submitUserData}
                  className="bg-indigo-500 px-4 py-2 text-white rounded hover:bg-indigo-600  hover:shadow-indigo-500 hover:shadow-4lg"
                >
                  Signin
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
