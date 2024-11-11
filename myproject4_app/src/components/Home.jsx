
import React, { useState } from "react";
import '../styles/Home.css'
function Home(){
    
       
        const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1)
       
        
    };
    const decrement=()=>{
        setCount(count-1)
    }

    return(
        <div>
         <h2>counter</h2>
        <p>{count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        </div>
    );



       
}
export default Home;