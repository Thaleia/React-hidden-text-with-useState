import { useState } from "react";
import React from "react";

export default function Test({text1, maxLength1}) {

    const [reveal, setReveal] = useState(true);

    if (text1.length <= maxLength1) { 
        return <p>{text1}</p>;
    }
  return (
    <span className='main-box'>
      {reveal ? `${text1.substring(0, maxLength1).trim()}...` : text1}
      {reveal ? (
        <a onClick={() => setReveal(false)} > read more</a>
      ) :
      ( <a onClick={() => setReveal(true)}> read less</a>)
      }
    
    </span>
  )
}
