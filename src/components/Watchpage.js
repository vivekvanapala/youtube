import React from 'react'
import { useSearchParams } from "react-router-dom";
import Comments from './Comments';

const Watchpage = () => {
    const [searchParams] = useSearchParams();
    const id=searchParams.get('v')
  return (
    <div>
       <div className='pl-5'>
        <iframe width="800" height="500" padd src={"https://www.youtube.com/embed/"+id} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <Comments/>
    </div>
  )
}

export default Watchpage