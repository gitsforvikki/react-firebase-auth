import React from "react";

let Home =(props)=>{
  return(
    <React.Fragment>
      <p>{`Hello ${props.userName}`}</p>
      <h3 className="text-gray-500 text-3xl">Home</h3>
    </React.Fragment>
  )
}
export default Home;