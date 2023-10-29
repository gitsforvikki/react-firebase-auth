import React, { useEffect, useState } from "react";

let Home =(props)=>{
 
  
  return(
    <React.Fragment>
      <pre>{JSON.stringify(localStorage.getItem('isLoggedIn'))}</pre>
      <div className='landing-page'>
      <div className='wrapper'>
      <div className=" pt-32 flex flex-col justify-center items-center text-center h-100">
     {
      (localStorage.getItem('isLoggedIn') == "true") ?  <p className="text-2xl lg:text-5xl" >{`Welcome ${props.userName}`}</p> :
        <div>
          <p>Registration success</p>
          <p className="text-2xl lg:text-5xl" >{`Hello ${props.userName}`}</p>
        </div>
     }
           <p className="display-4 text-3xl sm:text-9xl text-gray-600 font-bold">Assignment <sub className='text-2xl sm:text-6xl '> by <span className='underline '> Relu Consultancy</span> </sub></p>
                                         
      </div>
      </div>
      </div>
    </React.Fragment>
  )
}
export default Home;