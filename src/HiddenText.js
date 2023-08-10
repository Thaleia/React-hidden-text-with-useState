import { useState } from 'react';
import React from 'react'

// The HiddenText component expects 2 props: text & maxLength
// text - the text to display
// maxLength - how many characters to show before "read more"
function HiddenText({ text, maxLength}) { 
    // Boolean useState initialized to true
    // hidden holds current value and will also work asynchronously
    // setHidden allows us to change hidden
    // const [hidden, setHidden] = useState(true);
    // if text less than 40 characters render it
    // if (text.length <= maxLength) { 
    //     return <span>{text}</span>;
    // }
    // // if text is more or equal to 40 characters 
    // return (
    // <span>
    //     {hidden ? `${text.substring(0, maxLength).trim()}...` : text}
    //     {hidden ? (
    //         <a onClick={() => setHidden(false)}> read more</a>
    //     ) : (
    //         <a onClick={() => setHidden(true)}> read less</a>
    //     )}
    // </span>




const [hidden, setHidden] = useState(true);

if (text.length <= maxLength) {
    return <span>{text}</span>;
}
return (
   <span className='main-box'>
        {hidden ? `${text.substring(0, maxLength).trim()}... ` : text}
        {hidden ?
         (<a onClick={() => setHidden(false)}> read more</a>)
        :
         (<a onClick={() => setHidden(true)}> read less</a>)}
    </span>
);
}
export default HiddenText;