import React from 'react'
import React, { useState } from 'react'

export default function NewCounter() {
  const [count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=> setCount(count - 1)}></button>
      <h2>{count}</h2>
      <button onClick={()=> setCount(count + 1)}></button>
    </div>
  )
}

