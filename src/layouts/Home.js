import React from "react";

let Home = (props) => {
  return (
    <React.Fragment>
      <div className="landing-page">
        <div className="wrapper">
          <div className=" pt-32 flex flex-col justify-center items-center text-center h-100">
            {localStorage.getItem("isLoggedIn") == "true" ? (
              <div className="text-gray-600">
                <p className="text-2xl lg:text-5xl">{`Welcome ${props.userName}`}</p>
                <p>You are loggedin..!</p>
              </div>
            ) : (
              <div className="text-gray-600">
                <p className="text-2xl lg:text-5xl">{`Hello ${props.userName}`}</p>
              </div>
            )}
            <p className="display-4 text-3xl mt-4 lg:mt-6 sm:text-9xl text-gray-600 font-bold">
              Assignment{" "}
              <sub className="text-2xl sm:text-6xl ">
                {" "}
                by <span className="underline "> Relu Consultancy</span>{" "}
              </sub>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
