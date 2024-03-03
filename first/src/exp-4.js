import React,{useState}from 'react';
const Stateful=()=>{
    const[count,setCount]=useState(0);
    return(
        <>
        <h1>Button is clicked:{count}</h1>
        <button
        onClick={(e)=>{
            e.stopPropagation();
            e.preventDefault();
            setCount(count+1);
        }}
        >
            click to update
        </button>
        </>
    );
};
export default Stateful;