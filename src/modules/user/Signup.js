import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

let Signup = () => {
  let navigate = useNavigate();
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let [errorMsg, setErrorMessage] = useState("");
  let [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  let updataUserstate = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    setErrorMessage("");
  };

  let submitUserData = (event) => {
    event.preventDefault();
    let { name, email, password } = user;
    if (name && email && password) {
      //authentication configuration start
      setSubmitButtonDisabled(true);
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then( async (res) => {
          setSubmitButtonDisabled(false);
          localStorage.setItem('isLoggedIn' , false);
          await updateProfile(res.user, {
            displayName: user.name,
          });

          if (res) {
            setErrorMessage("");
            fetch(
              "https://react-with-firebaseauth-default-rtdb.asia-southeast1.firebasedatabase.app/react-firebase.json",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                  password,
                }),
              }
            )
              .then((response) => {
                console.log("Response send to Firebase");
              })
              .catch((err) => {
                console.log(err);
              });
          }
          if (res) {
            navigate("/");
            setUser({
              name: "",
              email: "",
              password: "",
            });
          }
          
          console.log(res);
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMessage(err.message);
          console.log(err.message);
        });
      //authentication configuration end
    } else {
      setErrorMessage("All fields required.");
    }
  };
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(user)}</pre> */}
      <div className="h-screen bg-gray-100 flex flex-col justify-center items-center ">
        <div>
          <span className="text-2xl ">Create your account</span>
          <br />

          <div className="h-2 mt-5 bg-indigo-400 rounded-t-md"></div>
          <div className="shadow-md hover:shadow-2xl">
            <form className="px-8 py-6 bg-white" method="POST">
              {errorMsg && (
                <div className="text-center text-sm text-red-600">
                  <span className="">{errorMsg}</span>
                </div>
              )}
              <div className="mb-3">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={updataUserstate}
                  className=" border px-4 py-2 rounded hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  placeholder="Aditya"
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={updataUserstate}
                  className=" border px-4 py-2 rounded hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  placeholder="name@shopops.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  for="Password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your Password
                </label>
                <input
                  type="password"
                  id="email"
                  name="password"
                  value={user.password}
                  onChange={updataUserstate}
                  className=" w-full border px-4 py-2 rounded hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  placeholder="********"
                  required
                />
              </div>

              <div className="my-6 flex justify-between items-baseline">
                <button
                  type="submit"
                  onClick={submitUserData}
                  disabled={submitButtonDisabled}
                  className=" bg-indigo-500 text-white px-3 py-2 rounded-md hover:bg-indigo-600 hover:shadow-indigo-500 hover:shadow-4lg"
                >
                  Submit
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
export default Signup;
