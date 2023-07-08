import React, { useEffect, useState } from 'react'

const Api = () => {

    const [arr,setarr]=useState([])

    useEffect(()=>{
        getapi()
    },[])

    async function getapi()
    {
        const data=await fetch("http://localhost:2345/api");
        const json=await data.json();
        setarr(json);
    }
    return(arr.length===0)?(<h1>Empty</h1>):(<h1>fully</h1>)
}

export default Api