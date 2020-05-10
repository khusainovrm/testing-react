import React, {useState} from 'react'
import './Counter.css'



export default function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <div className='counter'>
      <div>
        <h2 >Counter: {counter} </h2>
        <div>
          <button onClick={() => setCounter(counter+1)} >Increase</button>&nbsp;
          <button onClick={() => setCounter(counter-1)} >Decrease</button>
        </div>
      </div>
    </div>
  )
}
