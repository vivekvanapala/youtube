import React from 'react'
import { watchlist } from './WatchList'
const Videocart = (props) => {
    console.log(props)
  return (
   <div className='pl-10 pt-3 w-80  shadow-lg m-3 rounded-lg h-80 items-stretch'>
     <img onMouseEnter={()=>{
      watchlist.add(props.info.id)
     }} 
     className='rounded-lg' alt='logo' src={props.info.snippet.thumbnails.medium.url}/>
     <ul>
        <li className='font-bold'>{props.info.snippet.title}</li>
        <li>{props.info.snippet.channelTitle}</li>
        <li>{props.info.statistics.viewCount} views</li>
     </ul>
   </div>
  )
}

export default Videocart