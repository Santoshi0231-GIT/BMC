import React,{useState} from 'react'

const multi = () => {
const[multiply,value]=useState(2)

function Multiply(){
    multiply(multiply*2)
}


  return (
   <>
   <div>
    <h1>Multiplication value:
        </h1><h2>{multi}
<section className=''>
    <button className=''onClick={Multiply}>MULTIPLY</button>
</section>
        </h2>
    </div>
   
   </>
  )
}

export default multi