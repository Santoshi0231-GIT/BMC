import React from "react";
import Logic from "../logic/logic"
import Count from '../count/count'
import Multi from "../multiplication/multi"

const Home = () => {
  return (

    <h2 style={{ color: 'red', backgroundColor: "purple" }} >This is home page</h2>
    ,
    <div className='py-10 px-10'>
      <Logic />
      <div>
        <Count/><Multi/>
      </div>
    </div>
  )
}

export default Home