import React, { useEffect, useState } from 'react'
import {userlogo ,burger,ylogo} from '../logo'
import { Link } from 'react-router-dom'
import { suggestionapi } from '../Contact';

const Head = () => {
  const [input,setinput]=useState("");
  const [suggestion,setsuggestion]=useState([]);
  const [hidden,sethidden]=useState(false);

  useEffect(()=>{
    const timer=setTimeout(()=>getsuggestion(),200);
    return ()=>{
      clearTimeout(timer)
    };
    },[input]);

  async function getsuggestion()
  {
    const data=suggestionapi+input;
    const suggestion=await fetch(data);
    const json=await suggestion.json();
    setsuggestion(json[1]);
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img className='h-10' alt='' src={burger}/>
            <Link to="/"><img className='h-8 pl-3 mx-2 scale-75' alt='' src={ylogo}/></Link>
        </div>
        <div className='col-span-10 px-10'>
          <div>
            <input className='w-1/2 border border-gray-500 p-2 rounded-l--full' placeholder='Search' value={input} onChange={(e)=>setinput(e.target.value)}
            onFocus={(e)=>sethidden(true)} onBlur={(e)=>sethidden(false)}/>
            <button className='p-2 border border-gray-500 rounded-r-full'>
              Search
            </button>
            <div className='fixed bg-white py-2 px-5 w-[30rem] shadow-lg rounded-lg'>
              {hidden && <ul className='flex flex-col'>
              {suggestion.map((s,index)=>{
                  return <l1 className="py-2 px-3 shadow-sm  hover:bg-gray-300" key={index} >
                    🔍{s}
                    </l1>
                })}

                </ul>}
            </div>
            </div>
        </div>
        <div className='col-span-1'>
            <img className='h-10' alt='' src={userlogo}/>
        </div>
    </div>
  )
}

export default Head;