import React, { useState } from 'react'
let count=0
const Logic = () => {
    const [state,setState]=useState(10)
    //initial data is stored in state setstate is set of function
let count=0;

function Increment(){
setState(state+1)
console.log('increment',state)


}





function Decrement(){
setState(state-1)
console.log('decrement',state)


}


  return (
  <>
  <div className='flex flex-col justify-center items-center w-[100vh bg-pink-700' >Counter Value: <h1 className='text-4xl font-extrabold text-white bg-pink-700'>{state}
    </h1>
    <section className=''>
        <button className='bg-green text-white px-10 py-4 border-none roundedd-2xl' onClick={Increment}> Increment</button>
        <button className='bg-red text-white px-10 py-4 border-none roundedd-2xl' onClick={Decrement}> Decrement</button>
    </section>
  </div>
  </>
  )
}

export default Logic