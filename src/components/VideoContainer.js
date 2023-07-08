import React, { useEffect, useState } from 'react'
import { Api } from '../Contact';
import Videocart from './Videocart';
import { Link } from 'react-router-dom';
import Ui from './Ui';

const VideContainer = () => {
    const [youtubevideo,setvideo]=useState([]);

    async function getData()
    {
        const data=await fetch(Api);
        const json=await data.json();
        console.log(json);
        setvideo(json.items);
    }

    useEffect(()=>{
        getData();
    },[])
  return (youtubevideo.length===0
  )?(<Ui/>):(
    <div className='flex flex-wrap'>
        {youtubevideo.map((i)=>{
            return <Link to={"/watch?v="+i.id}>
                <Videocart info={i} key={i.id}/>
                </Link>
        })}
    </div>
  )
}

export default VideContainer;