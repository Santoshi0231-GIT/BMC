import React,{useState} from 'react'

const count = () => {
const [state,setState]=useState(2)

function Increment(){
    setState(state*2)
}2
function Decrement(){
    setState(state/10)
}

  return (
    <>
    <div>
       <h1> Count:</h1>
        <h1>{state}</h1>
        <section className=''>
<button className='bg-green-100'onClick={Increment}>Increment</button>
<button className='bg-green-100'onClick={Decrement}>Decrement</button>




        </section>
    </div>
    
    
    </>
  )
}

export default count